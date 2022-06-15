import React from 'react'
import './object-tourism.css'
// import Input from '../../components/atoms/search-bar';
// import Button from '../../components/atoms/Add-Button';
import ObjectTourismCard from '../../components/ObjectTourismCard';

class ObjectTourism extends React.Component {
  constructor(props){
    super(props);

    this.state = {
      objects: []
    }
  }

  getDataObject() {
    this.setState({
      loading: true
    }, () => {
      fetch("http://localhost:3001/objects")
        .then(response => response.json())
        .then(result => this.setState({
          objects: result
        }))
        .catch(console.info);
    });
  }

  componentDidMount() {
    this.getDataObject();
  }

  render(){
    return (
      <div className='object-tourism-wrapper'>
        <div>
          <h2>Object Component Testing</h2>
          <hr/>
          {
            this.state.objects.map(object => {
              return (
                  <ObjectTourismCard key={object.id} {...object} />
              )
            })
          }
        </div>
      </div >
    )
  }
}

export default ObjectTourism;
