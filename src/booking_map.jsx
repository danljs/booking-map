import React from 'react'
import ReactDOM from 'react-dom'

class BookingMap extends React.Component{
  constructor(props) {
    super(props)
    this.state={
      initialZoom: 8,
      mapCenterLat: 43.6425569,
      mapCenterLng: -79.4073126
    }
  }

  componentWillMount(){
  }
  
  componentWillUnmount(){
  }

  componentWillReceiveProps(nextProps){
  }

  componentDidMount(){
    var map;
      function initialize() {
        var mapOptions = {
          zoom: 8,
          center: {lat: -34.397, lng: 150.644}
        };
        map = new google.maps.Map(document.getElementById('map'),
            mapOptions);

        var marker = new google.maps.Marker({
          // The below line is equivalent to writing:
          // position: new google.maps.LatLng(-34.397, 150.644)
          position: {lat: -34.397, lng: 150.644},
          map: map
        });

        // You can use a LatLng literal in place of a google.maps.LatLng object when
        // creating the Marker object. Once the Marker object is instantiated, its
        // position will be available as a google.maps.LatLng object. In this case,
        // we retrieve the marker's position using the
        // google.maps.LatLng.getPosition() method.
        var infowindow = new google.maps.InfoWindow({
          content: '<p>Marker Location:' + marker.getPosition() + '</p>'
        });

        google.maps.event.addListener(marker, 'click', function() {
          infowindow.open(map, marker);
        });
      }

      google.maps.event.addDomListener(window, 'load', initialize);
  }

  mapCenterLatLng() {
    var props = this.props;
    return new google.maps.LatLng(this.state.mapCenterLat, this.state.mapCenterLng);
  }

  render(){
    return (
      <div id='map' className='map'>cccc</div>
    )
  }
}
export default BookingMap

BookingMap.propTypes = {
}

BookingMap.defaultProps = {
}
