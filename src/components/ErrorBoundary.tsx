import React from "react";

interface Props {
  children: React.ReactNode;
}

interface State {
  hasError: boolean;
  error: Error | null;
}

class ErrorBoundary extends React.Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = {
      hasError: false,
      error: null,
    };
  }

  public static getDerivedStateFromError(error: Error): State {
    return { hasError: true, error };
  }

  public componentDidCatch(error: Error, errorInfo: React.ErrorInfo) {
    console.error("Uncaught error:", error, errorInfo);
  }

  public render() {
    if (this.state.hasError) {
      return (
        <div style={{
          padding: "20px",
          backgroundColor: "#ff0000",
          color: "#ffffff",
          minHeight: "100vh",
          fontFamily: "monospace",
          overflow: "auto"
        }}>
          <h1>Algo deu errado ❌</h1>
          <pre style={{ whiteSpace: "pre-wrap" }}>
            {this.state.error?.toString()}
          </pre>
          <p>Por favor, informe este erro para que eu possa consertar.</p>
          <button 
            onClick={() => window.location.reload()}
            style={{
              padding: "10px 20px",
              backgroundColor: "white",
              color: "red",
              border: "none",
              cursor: "pointer",
              fontWeight: "bold"
            }}
          >
            Recarregar Página
          </button>
        </div>
      );
    }

    return this.props.children;
  }
}

export default ErrorBoundary;
