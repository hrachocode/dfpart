import React from 'react';

class ErrorBoundary extends React.Component {
    state = {
        hasError: false
    }

    componentDidCatch(error, errorInfo) {
        this.setState({
            hasError: error.toString()
        })
        // You can also log the error to an error reporting service
        console.log(error);
    }

    render() {
        if (this.state.hasError) {
            // You can render any custom fallback UI
            return <h1>{this.state.hasError}</h1>;
        }

        return this.props.children;
    }
}

export default ErrorBoundary;