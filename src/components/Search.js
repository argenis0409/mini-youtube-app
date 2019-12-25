import React, { Component } from 'react'
import { Paper, TextField } from '@material-ui/core';

export default class Search extends Component {
    state = {
        searchItem: '',
    }
    
    handleChange = (e) => {
        this.setState({ searchItem: e.target.value })
    }
   
    render() {
        return (
           <Paper elevation={6} style={{ padding: '25px'}}>
               <form onSubmit={this.handleSubmit}>
                   <TextField fullWidth label='Search...' onChange={this.handleChange} />
               </form>
           </Paper>
        )
    }
}
