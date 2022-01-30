import React, { Component } from "react";
import axios from "axios";

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
      })
      .catch(function (error) {
        console.log(error);
      });
  };

  fileData = () => {
    if (this.state.selectedFile) {
      return (
        <div>
          <h2>File Details:</h2>

          <p>File Name: {this.state.selectedFile.name}</p>

          <p>File Type: {this.state.selectedFile.type}</p>

          
        </div>
      );
    } else {
      return (
        <div>
          <br />
          <h4>Choose before Pressing the Upload button</h4>
        </div>
      );
    }
  };

  render() {
    return (
      <div>
        <h1>GeeksforGeeks</h1>
        <h3>File Upload using React!</h3>
        <div>
          <input type="file" onChange={this.onFileChange} />
          <button onClick={this.onFileUpload}>Upload!</button>
        </div>
        {this.fileData()}
      </div>
    );
  }
}


export default PhotoApi;