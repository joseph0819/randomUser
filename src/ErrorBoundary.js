import { Component } from "react";

export class ErrorBoundary extends Component{
    constructor(props){
        super(props)
        this.state = {
         hasError: false,
        }
    }

    static getDrivedStateFromError(error){
        return {
            hasError: true,
        }
    }

    componentDidCatch(error,errorInfo){
        console.log(error,errorInfo);
    }

    render() {
        if(this.state.hasError){
            return <h1 className="error-head">Ooppss! Something went wrong!</h1>
        }
        return this.props.children

    }
}