import React, { Component } from 'react';
import gql from "graphql-tag";
import { Mutation } from "react-apollo";
import { Link } from 'react-router-dom';

const ADD_LOGO = gql`
    mutation AddLogo(
        $text: String!,
        $color: String!,
        $fontSize: Int!,
        $background: String!,
        $borderColor: String!,
        $borderRadius: Int!,
        $borderWidth: Int!,
        $padding: Int!,
        $margin: Int!
        ) {
        addLogo(
            text: $text,
            color: $color,
            fontSize: $fontSize,
            background: $background,
            borderColor: $borderColor,
            borderRadius: $borderRadius,
            borderWidth: $borderWidth,
            padding: $padding,
            margin: $margin
            ) {
            _id
        }
    }
`;

class CreateLogoScreen extends Component {
    constructor(props){
        super(props);
        this.state={text:"Logo",color:"0",fontSize:"12",backgroundColor:"white",borderColor:"Black",borderRadius:"0",borderWidth:"0",margin:"0",padding:"0"}
        
    }

    componentWillMount(){

    }

    updateState(e,attribute,isNumber){
        this.state[attribute]= isNumber ?parseInt(e.target.value):e.target.value;
        this.setState({})

    }
    render() {
        let text, color, fontSize, background,borderColor, borderRadius, borderWidth, padding, margin;
        return (
            <Mutation mutation={ADD_LOGO} onCompleted={() => this.props.history.push('/')}>
                {(addLogo, { loading, error }) => (
                    <div className="container">
                        <div className="panel panel-default">
                            <div className="panel-heading">
                                <h4><Link to="/">Home</Link></h4>
                                <h3 className="panel-title">
                                    Create Logo
                            </h3>
                            </div>
                            <div className="panel-body">
                                <form onSubmit={e => {
                                    e.preventDefault();
                                    if(text.value.trim().length === 0){
                                        alert("You must enter text to create this logo.")
                                        console.log("Could not create logo -- user didn't enter text");
                                        return false;
                                    }
                                    addLogo({ variables: { text: text.value, 
                                        color: color.value, 
                                        fontSize: parseInt(fontSize.value),
                                         background: background.value,
                                          borderColor: borderColor.value, 
                                          borderRadius: parseInt(borderRadius.value), 
                                          borderWidth: parseInt(borderWidth.value), 
                                          padding: parseInt(padding.value), 
                                          margin: parseInt(margin.value) } });
                                    text.value = "";
                                    color.value = "";
                                    fontSize.value = "";
                                    background.value = "";
                                    borderColor.value = "";
                                    borderRadius.value = "";
                                    borderWidth.value = "";
                                    padding.value = "";
                                    margin.value = "";

                                }}>
                                    
                                    <div className="row">
                                        

                                       
                                                                                 
                                          


                                        <div className="col-sm-7 sideContainer">
                                        <div className="side" >
                                        <form onSubmit={e => {
                                            e.preventDefault();
                                         


                                        }}>
                                            <div className="form-group">
                                            <div>

                                                <div className="row">

                                                <label htmlFor="text">Text:</label>
                                                <input type="text" className="f" name="text" onChange={e => {this.updateState(e, "text", false) } }  style={{width:"150px",height:"16pt"}}  ref={node => {
                                                    text = node;
                                                }}  placeholder="Text"  defaultValue={"Logo"} />

                                                    </div>
                                            </div>
                                            </div>


                                            <div className="form-group">
                                            <div className="col s7">

                                            <div className="row">

                                                <label htmlFor="color">Color:</label>
                                                <input type="color" className="f" name="color" onChange={ e => {this.updateState(e, "color", false) } } style={{width:"50px",height:"16pt"}}style={{padding:"0px",width:"20px",height:"20pt"}} ref={node => {
                                                    color = node;
                                                }} placeholder="Color" defaultValue={0} />
                                            </div>
                                            </div>
                                            </div>

                                            <div className="form-group">
                                            <div className="col s7">

                                            <div className="row">

                                                <label htmlFor="background">Background:</label>
                                                <input type="color" className="f" name="background" onChange={ e => {this.updateState(e, "backgroundColor", false) } } style={{padding:"0px",width:"20px",height:"20pt"}}  ref={node => {
                                                    background = node;
                                                }}  defaultValue={"#FFFFFF"} />
                                            </div>
                                            </div>
                                            </div>



                                            <div className="form-group">
                                            <div className="col s7">
                                            <div className="row">

                                                <label htmlFor="fontSize">Font Size: </label>
                                                <input type="range" min = "0" max = "72" className="f" name="fontSize" onChange={ e => {this.updateState(e, "fontSize", true) } }style={{width:"50px",height:"16pt"}} ref={node => {
                                                    fontSize = node;
                                                }} placeholder="Font Size" defaultValue={12} />
                                            </div>
                                            </div>
                                            </div>



                                            <div className="form-group">
                                            <div className="col s7">
                                            <div className="row">

                                                <label htmlFor="borderColor">Border Color:</label>
                                                <input type="color" className="f" name="borderColor" onChange={ e => {this.updateState(e, "borderColor", false) } } style={{padding:"0px",width:"20px",height:"20pt"}} ref={node => {
                                                    borderColor = node;
                                                }}  defaultValue={0} />
                                            </div>
                                            </div>
                                            </div>
                                            
                                           

                                            <div className="form-group">
                                            <div className="col s7">
                                            <div className="row">

                                                <label htmlFor="borderRadius">Border Radius:</label>
                                                <input type= "range" className="f" name="borderRadius" onChange={ e => {this.updateState(e, "borderRadius", true) } } style={{width:"50px",height:"16pt"}} ref={node => {
                                                    borderRadius = node;
                                                    
                                                }}  defaultValue={0} min = "0" max = "20" />
                                            </div>
                                            </div>
                                            </div>

                                            <div className="form-group">
                                            <div className="col s7">

                                            <div className="row">

                                                <label htmlFor="borderWidth">Border Width:</label>
                                                <input type="range" min = "0" max = "30" className="f" name="borderWidth" onChange={ e => {this.updateState(e, "borderWidth", true) } } style={{width:"50px",height:"16pt"}} ref={node => {
                                                    borderWidth = node;
                                                }}  defaultValue={0} />
                                            </div>
                                            </div>
                                            </div>

                                            <div className="form-group">
                                            <div className="col s7">

                                            <div className="row">
                                                <label htmlFor="margin">Margin:</label>
                                                <input type="range" min = "0" max = "20" className="f" name="margin" onChange={ e => {this.updateState(e, "margin", true) } } style={{width:"50px",height:"16pt"}} ref={node => {
                                                    margin = node;
                                                }}  defaultValue={0} />
                                            </div>
                                            </div>
                                            </div>


                                            <div className="form-group">
                                            <div className="col s7">

                                            <div className="row">
                                                <label htmlFor="borderWidth">Padding: </label>
                                                <input type="range" className="f" name="padding" onChange={ e => {this.updateState(e, "padding", true) } } style={{width:"50px",height:"16pt"}}  ref={node => {
                                                    padding = node;
   
                                                }} defaultValue={0} />

                                            </div>
                                            <button type="submit" className="btn btn-success" style={{display:"inline-block"}}>Submit</button>

                                            </div>
                                            </div>
                                            </form>

                                            </div>
                                            </div> 
                                            


                                         <div className="col-sm-5 logoContainer">
                                            <div id=" logo" style={{float:"left",
                                           color: this.state.color, 
                                                borderStyle:"solid" , 
                                                background : (this.state.backgroundColor ), 
                                                margin: ( this.state.margin) +5 + "px",
                                                 padding: (this.state.padding ) + "px",
                                                  borderColor: (this.state.borderColor ) , 
                                                  fontSize: (this.state.fontSize ) + "px" , 
                                                  borderWidth: (this.state.borderWidth ) + "px" , 
                                                   borderRadius:  ( this.state.borderRadius )+ "px"}}>{this.state.text}
                                                   </div>
                                                   </div>

                                                   
                                           


                                          
                                        {loading && <p>Loading...</p>}
                                        {error && <p>Error :( Please try again</p>}
                                    </div>


                                </form>
                              
                            </div>
                        </div>
                    </div>
                )}
            </Mutation>
        );
    }
}

export default CreateLogoScreen;