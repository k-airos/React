import { Component } from 'react';

import AppInfo from '../app-info/app-info';
import SearchPanel from '../search-panel/search-panel';
import AppFilter from '../app-filter/app-filter';
import EmployeesList from '../employees-list/employees-list';
import EmployeesAddForm from '../employees-add-form/employees-add-form';
import './app.css';


class App extends Component{

    constructor(props){
        super(props);
        this.state = {
            data : [
                {name:"John. C",salary:800, increase: false, rise:true, id: 1},
                {name:"Alex. M", salary: 3000, increase: true, rise:false, id: 2},
                {name:"Kairos", salary: 5000, increase: false, rise:false, id: 3},
            ],
            term: '', 
            filter: 'all',
        }
        this.maxId = 4; 
    }


    deleteItem = (id) =>{
        this.setState(({data}) => {
            return {
                data: data.filter(item => item.id !==id)
            };
        })

    }
    
    addItem = (name, salary) =>{
        const newItem = {
            name, 
            salary,
            increase: false,
            rise: false,
            id: this.maxId++
        }
        this.setState(({data}) => {
            const newArr = [...data, newItem];
            return {
                data: newArr
            }
        });
    }


    onToggleProp = (id,prop) =>{
        // this.setState(({data}) =>{
        //     const index = data.findIndex(elem=> elem.id === id);
        //     let old = data[index];
        //     let newElem = {...old, increase: !old.increase};
        //     let newData = [...data.slice(0,index), newElem, ...data.slice(index+1)];
        //     return{
        //         data: newData
        //     }
        // })
        this.setState(({data})=>({
                data: data.map(item=>{
                    if(item.id === id) return {...item, [prop]:!item[prop]};
                    return item;
                })
        }))
    }

    search = (items, term)=>{
        if(!term) return items;

        return items.filter(item=>item.name.indexOf(term)>-1);
    }

    filterPost = (items,filter)=>{
        switch (filter) {
            case 'rise':
                return items.filter(item => item.rise);
            case 'moreThen1000':
                return items.filter(item => item.salary > 1000);
            default:
                return items;
        }
    }

    onCheckFilter = (filter)=>{
        this.setState({filter})
    }

    onUpdateSearch = (term)=>{
        this.setState({term}); //is also { term:term } obj
    }

    changedSalary = (value, id)=>{
        this.setState(({data})=>({
            data: data.map(item=>{
                if(item.id === id) return {...item, salary:value};
                return item;
            })
        }))
    }

    render(){
        const {data,term,filter} = this.state;
        const employees = this.state.data.length;
        const increaseEmployees = this.state.data.filter(item=>item.increase).length;
        const visibleData = this.filterPost(this.search(data, term),filter);
    
        return (
            <div className='app'>
                <AppInfo 
                    employees ={employees}
                    increase ={increaseEmployees}/>
    
                <div className="search-panel">
                    <SearchPanel onUpdateSearch={this.onUpdateSearch}/>
                    <AppFilter filter={filter} onCheckFilter={this.onCheckFilter}/>
                </div>
                <EmployeesList 
                    data={visibleData}
                    onDelete={this.deleteItem}
                    onToggleProp={this.onToggleProp}
                    changedSalary={this.changedSalary}/>
    
                <EmployeesAddForm onAdd={this.addItem} maxId={this.maxId}/>
            </div>
        );
    }

}

export default App;