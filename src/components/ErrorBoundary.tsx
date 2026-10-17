import { Component, ErrorInfo, ReactNode } from 'react';

interface Props {
    children: ReactNode;
}

interface State {
    hasError: boolean;
    error: Error | null;
}

class ErrorBoundary extends Component<Props, State> {
    public state: State = {
        hasError: false,
        error: null,
    };

    public static getDerivedStateFromError(error: Error): State {
        return { hasError: true, error };
    }

    public componentDidCatch(error: Error, errorInfo: ErrorInfo) {
        console.error('Uncaught error in ErrorBoundary:', error, errorInfo);
    }

    public render() {
        if (this.state.hasError) {
            return (
                <div className="min-h-screen flex items-center justify-center bg-gray-900 text-white p-6">
                    <div className="max-w-md w-full bg-gray-800 rounded-2xl p-6 border border-gray-700 shadow-2xl text-center space-y-4">
                        <div className="w-12 h-12 rounded-full bg-red-500/20 text-red-400 flex items-center justify-center mx-auto text-2xl font-bold">
                            !
                        </div>
                        <h2 className="text-xl font-bold text-white">Something went wrong</h2>
                        <p className="text-gray-300 text-sm">
                            An unexpected error occurred while loading this section.
                        </p>
                        {this.state.error && (
                            <pre className="text-xs bg-black/40 text-red-300 p-3 rounded-lg overflow-x-auto text-left font-mono">
                                {this.state.error.message}
                            </pre>
                        )}
                        <button
                            onClick={() => window.location.reload()}
                            className="px-5 py-2.5 bg-blue-600 hover:bg-blue-700 text-white rounded-xl text-sm font-semibold transition-all shadow-lg hover:scale-105"
                        >
                            Reload Page
                        </button>
                    </div>
                </div>
            );
        }

        return this.props.children;
    }
}

export default ErrorBoundary;
