import { Component } from 'react';
import './app-filter.css';

class AppFilter extends Component {

    constructor(props){
        super(props);
        this.state = {
            filter: 'All'
        }
    }

    onFilter = (e)=>{
        const filter = e.target.getAttribute('data-filter');
        this.setState({filter});
        this.props.onCheckFilter(filter);
    }

    render(){
        return(
            <div className="btn-group">
                <button 
                className={this.state.filter==="All"?"btn btn-light":"btn btn-outline-light"}
                data-filter="All"
                type="button"
                onClick={this.onFilter}>
                    Все сотрудники
                </button>
                <button 
                className={this.state.filter==="raisable"?"btn btn-light":"btn btn-outline-light"}
                type="button"
                data-filter="raisable"
                onClick={this.onFilter}>
                    Сотрудники на повышение
                </button>
                <button 
                className={this.state.filter==="moreThen1000"?"btn btn-light":"btn btn-outline-light"}
                type="button"
                data-filter="moreThen1000"
                onClick={this.onFilter}>
                    З/П больше 1000$
                </button>
            </div>
        )
    }

}

export default AppFilter;