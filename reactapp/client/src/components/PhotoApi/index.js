import React, { Component } from "react";
import axios from "axios";
import { Container,Input, Button1, Button2, Instruction } from './PhotoApiElements';


class PhotoApi extends Component {

  state = {
    selectedFile: null,
  };

  //on file select
  onFileChange = (event) => {
    this.setState({ selectedFile: event.target.files[0] });
  };
  //on file upload 
  onFileUpload = () => {
    const formData = new FormData();
    formData.append(
      "myFile",
      this.state.selectedFile,
      this.state.selectedFile.name
    );
    console.log(this.state.selectedFile);
    //console.log("FORM DATA", formData.values());
    axios
      .post("http://localhost:5000/download_image", formData)
      .then(function (response) {
        console.log("*******************");
        console.log(response.data);
        console.log(response.data["prediction_key"]);
        const data = response.data["prediction_key"];
        this.setState({ data });
      }.bind(this)
      )
      .catch(function (error) {
        console.log(error);
      });
      
  };

  fileData = () => {
    if (this.state.selectedFile) {
      return (
        <div>
          {/*<h2>File Details:</h2>*/}

          {/*<p>File Name: {this.state.selectedFile.name}</p>*/}

          {/*<p>File Type: {this.state.selectedFile.type}</p>*/}


        </div>
      );
    } else {
      return (
        <div>
          <br />
          <h4>Choose your photo before pressing the Upload button</h4>
        </div>
      );
    }
    
  };



  render() {
    return (
      <Container>
          
          <Input type="file" onChange={this.onFileChange} />
          <Button1 onClick={this.onFileUpload}>Upload</Button1>
          <Button2 onClick={event =>  window.location.href='/cards'}> {this.state.data}</Button2>
          {/* <Instruction>Choose before Pressing the Upload button</Instruction> */}
          {this.fileData()}
      </Container>
      
    );
  }
}


export default PhotoApi;