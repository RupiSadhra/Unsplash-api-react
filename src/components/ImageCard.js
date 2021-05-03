import React from 'react';

class ImageCard extends React.Component{
    constructor(props)
    { super(props);
        this.state={spans:0}
       
        this.imageRef=React.createRef();
    }

    setSpans=()=>
    {
        const height=this.imageRef.current.clientHeight;
        const spans=Math.ceil(height/150);
        this.setState({spans:spans});
    }
    componentDidMount()
    {
        this.imageRef.current.addEventListener('load',this.setSpans);
    }
    render()
    {
        return(
        <div style={{gridRowEnd:`span ${this.state.spans}`}}>
            <img ref={this.imageRef} src={this.props.image.urls.regular}/>
        </div>
        )
    }
}

export default ImageCard;