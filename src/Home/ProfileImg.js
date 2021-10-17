import React, { Component } from 'react'

export class ProfileImg extends Component {
    state = {
        userImg: './images/user.png',
        edit: './images/edit.png'
    }
    imageHandler = (e)=> {
        const reader =new FileReader();
        reader.onload = () => {
            if(reader.readyState === 2){
                this.setState({userImg: reader.result})
            }
        }
        reader.readAsDataURL(e.target.files[0])
        console.log(reader);
    }
    render (){
        return (
            <>
                <figure style={{backgroundImage: `url(${process.env.PUBLIC_URL + '/images/img-shape.png'})`}}>
                    <img src={this.state.userImg} alt="" id="setImage"/>
                    <span className="selectfile"><input onChange={this.imageHandler} type="file" name="images-upload" accept="image/*"/>
                        <img src={this.state.edit} alt="" />
                    </span>
                </figure>
            </>
        )
    }
}

export default ProfileImg;
