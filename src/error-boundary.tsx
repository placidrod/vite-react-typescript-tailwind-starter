import React from 'react';

type Props = {
  children: React.ReactNode;
  fallback?: React.ReactNode;
};

class ErrorBoundary extends React.Component<Props> {
  state = { hasError: false };

  static getDerivedStateFromError(error: Error) {
    console.log(
      'Placid Logging: error from component. do something with it: ',
      error
    );
    return { hasError: true };
  }

  render() {
    if (this.state.hasError) {
      return this.props.fallback || <div>Error: Something is wrong!</div>;
    }

    return this.props.children;
  }
}

export default ErrorBoundary;
