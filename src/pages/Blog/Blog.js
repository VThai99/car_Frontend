import { GoogleMap, LoadScript, Marker } from "@react-google-maps/api";
import Main from "../../components/organisms/Main";

const Blog = () => {
  return (
    <Main>
      <LoadScript googleMapsApiKey="AIzaSyDNI_ZWPqvdS6r6gPVO50I4TlYkfkZdXh8">
        <GoogleMap
          mapContainerStyle={{ width: "400px", height: "400px", margin: "0 auto" }}
          zoom={10}
          center={{lat: 21.00522622741447, lng: 105.80409089816331 }}
        >
          <Marker position={{ lat: 21.00522622741447, lng: 105.80409089816331}} />
        </GoogleMap>
      </LoadScript>
    </Main>
  );
};
export default Blog;
