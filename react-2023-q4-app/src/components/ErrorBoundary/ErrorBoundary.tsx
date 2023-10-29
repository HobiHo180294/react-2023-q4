import { Component, ErrorInfo, ReactNode } from 'react';
import { FallbackError } from '@/components';

interface IErrorBoundaryProps {
  children?: ReactNode;
}

interface IErrorBoundaryState {
  hasError: boolean;
  error?: Error;
}

export class ErrorBoundary extends Component<IErrorBoundaryProps, IErrorBoundaryState> {
  constructor(props: IErrorBoundaryProps) {
    super(props);
    this.state = { hasError: false };
  }

  logError = (error: Error, componentStack: ErrorInfo['componentStack']): void => {
    console.error(error, componentStack);
  };

  static getDerivedStateFromError(error: Error): IErrorBoundaryState {
    return { hasError: true, error };
  }

  componentDidCatch(error: Error, { componentStack }: ErrorInfo): void {
    this.logError(error, componentStack);
  }

  render() {
    return this.state.hasError ? (
      <FallbackError message={this.state.error?.message} />
    ) : (
      this.props.children
    );
  }
}
