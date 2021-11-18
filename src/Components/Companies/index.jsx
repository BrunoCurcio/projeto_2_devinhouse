import React from "react";
import { useState } from "react";
import { useHistory } from "react-router";
import { toast } from "react-toastify";
import SERVER from "../../utils/constants";
import "./style.css";


const Companies = () => {

    const history = useHistory();

    const [razaoSocial, setRazaoSocial] = useState("");
    const [nomeFantasia, setNomeFantasia] = useState("");
    const [cnpj, setCnpj] = useState("");
    const [emailEmpresa, setEmailEmpresa] = useState("");

    const [cep, setCep] = useState("");
    const [endereco, setEndereco] = useState("");
    const [numero, setNumero] = useState("");
    const [bairro, setBairro] = useState("");
    const [cidade, setCidade] = useState("");
    const [complemento, setComplemento] = useState("");

    const [latitude, setLatitude] = useState("");
    const [longitude, setLongitude] = useState("");
    
    const handleSubmit = async (event) => {
        
        try {
            event.preventDefault();

            if(!razaoSocial) {
                toast.error("Razão social é obrigatória", {
                    position: toast.POSITION.TOP_CENTER,
                    theme: "colored"
                });
                return
            } else if (!nomeFantasia) {
                toast.error("Nome fantasia é obrigatório", {
                    position: toast.POSITION.TOP_CENTER,
                    theme: "colored"
                });
                return
            }else if (!cnpj) {
                toast.error("CNPJ é obrigatório", {
                    position: toast.POSITION.TOP_CENTER,
                    theme: "colored"
                });
                return
            }else if (!emailEmpresa) {
                toast.error("E-mail é obrigatório", {
                    position: toast.POSITION.TOP_CENTER,
                    theme: "colored"
                });
                return
            }else if (!cep) {
                toast.error("CEP é obrigatório", {
                    position: toast.POSITION.TOP_CENTER,
                    theme: "colored"
                });
                return
            }else if (!endereco) {
                toast.error("Endereço é obrigatório", {
                    position: toast.POSITION.TOP_CENTER,
                    theme: "colored"
                });
                return
            }else if (!numero) {
                toast.error("Número é obrigatório", {
                    position: toast.POSITION.TOP_CENTER,
                    theme: "colored"
                });
                return
            }else if (!bairro) {
                toast.error("Bairro é obrigatório", {
                    position: toast.POSITION.TOP_CENTER,
                    theme: "colored"
                });
                return
            }else if (!cidade) {
                toast.error("Cidade é obrigatório", {
                    position: toast.POSITION.TOP_CENTER,
                    theme: "colored"
                });
                return
            }else if (!latitude) {
                toast.error("Latitude é obrigatória", {
                    position: toast.POSITION.TOP_CENTER,
                    theme: "colored"
                });
                return
            }else if (!longitude) {
                toast.error("Longitude é obrigatória", {
                    position: toast.POSITION.TOP_CENTER,
                    theme: "colored"
                });
                return
            }

            await fetch( SERVER + "/empresas",
            {
                headers: {
                  'Accept': 'application/json',
                  'Content-Type': 'application/json'
                },
                method: "POST",
                body: JSON.stringify({
                  "razao_social": razaoSocial,
                  "nome_fantasia": nomeFantasia,
                  "cnpj": cnpj,
                  "email_empresa": emailEmpresa,
                  "cep": cep,
                  "endereco": endereco,
                  "numero": numero,
                  "bairro": bairro,
                  "cidade": cidade,
                  "complemento": complemento,
                  "latitude": latitude,
                  "longitude": longitude,
                })
              }
            );

            toast.success("Empresa cadastrada com sucesso", {
                position: toast.POSITION.TOP_CENTER,
                theme: "colored"
            });

            history.push("/map");
            
        } catch (error) {
            toast.error("Houve um problema no cadastro de novo produto. Estamos tentando resolver!", {
                position: toast.POSITION.TOP_CENTER,
                theme: "colored"
            });
            history.push("/map");
        }
    }

    return (
        
        <form className="container-form-companies" onSubmit={handleSubmit}>

            <div className="form-header">
                <h1>Nova empresa</h1>
                <div className="form-buttons">
                    <button className="btn-cancel" onClick={() => history.push('/map')} type="button">Cancelar</button>
                    <button className="btn-companies" type="submit">Salvar</button>
                </div>    
            </div>

            <hr/>

            <div className="company-data">
                <div className="company-contact">
                    <label><input  type="text" value={razaoSocial} onChange={(event) => setRazaoSocial(event.target.value)}></input>Razão Social*</label>
                    <label><input  type="text" value={nomeFantasia} onChange={(event) => setNomeFantasia(event.target.value)}></input>Nome Fantasia*</label>
                </div>
                <div className="company-contact">
                    <label><input type="number" value={cnpj} onChange={(event) => setCnpj(event.target.value)}></input>CNPJ*</label>
                    <label><input type="email" value={emailEmpresa} onChange={(event) => setEmailEmpresa(event.target.value)}></input>E-mail*</label>
                </div>
            </div>
                
            <hr/>

            <div className="company-adress">
                <div className="adress-group-1">
                    <label><input type="number" value={cep} onChange={(event) => setCep(event.target.value)}></input>CEP*</label>
                    <label><input type="text" value={endereco} onChange={(event) => setEndereco(event.target.value)}></input>Endereço*</label>
                </div>
                <div className="adress-group-2">
                    <label><input type="number" value={numero} onChange={(event) => setNumero(event.target.value)}></input>Número*</label>
                    <label><input type="text" value={bairro} onChange={(event) => setBairro(event.target.value)}></input>Bairro*</label>
                    <label><input type="text" value={cidade} onChange={(event) => setCidade(event.target.value)}></input>Cidade*</label>
                </div>
                <div className="adress-group-3">
                <label><input type="text" value={complemento} onChange={(event) => setComplemento(event.target.value)}></input>Complemento</label>
                </div>
            </div>

            <hr/>

            <div className="company-map">
                <div className="company-position">
                    <label><input className="position-input" type="number" value={latitude} onChange={(event) => setLatitude(event.target.value)}></input>Latitude*</label>
                    <label><input className="position-input" type="number" value={longitude} onChange={(event) => setLongitude(event.target.value)}></input>Longitude*</label>
                </div>
            </div>   
        </form> 
    )
}

export default Companies;