import React, { useState, useEffect } from "react";
import {MapContainer, TileLayer, Marker, Popup} from "react-leaflet";
import SERVER from "../../utils/constants";
import "./style.css";

const Map = () => {

  const [companiesList, setCompaniesList] = useState([]);

  useEffect(() => {
    async function handleGetCompanies() {
      try {
        const response = await fetch(SERVER + "http://localhost:3333/empresas");
        const data = await response.json();

        setCompaniesList(data);

      } catch (error) {
        alert('Houve um erro ao tentar listar os mercados. Entre em contato com suporte.')
      }
    }
    handleGetCompanies();
  }, []);

  return (
    <div className="map-container">

      <h1>Empresas cadastradas</h1>

      <MapContainer center={[-27.5969, -48.5495]} zoom={10} scrollWheelZoom={true}>
        <TileLayer
          attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"/>

        {
          companiesList.map(item => (
            <Marker position={[item.latitude, item.longitude]}>
              <Popup>
                <p>Razão Social: {item.razao_social}</p>
                <p>Nome Fantasia: {item.nome_fantasia}</p>
                <p>CNPJ: {item.cnpj}</p>
                <p>E-mail: {item.email_empresa}</p>
              </Popup>
            </Marker>
          ))
        }
      </MapContainer>

    </div>
  )
}

export default Map;