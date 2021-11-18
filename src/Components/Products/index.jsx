import React from "react";
import { useState } from "react";
import { useHistory } from "react-router";
import { useEffect } from "react";
import { toast } from "react-toastify";
import "./style.css";
import SERVER from "../../utils/constants";

const Products = () => {

    const history = useHistory();

    const [imageUrl, setImageUrl] = useState("");
    const [productName, setProductName] = useState("");
    const [unitCost, setUnitCost] = useState("");
    const [description, setDescription] = useState("");

    const [providers, setProviders] = useState([]);
    const [provider, setProvider] = useState("");

    const [groups, setGroups] = useState([]);
    const [group, setGroup] = useState("");

    const handleSubmit = async(event) => {

        try {
            event.preventDefault();

            if(!imageUrl) {
                toast.error("Url é obrigatória", {
                    position: toast.POSITION.TOP_CENTER,
                    theme: "colored"
                });
                return
            } else if (!productName) {
                toast.error("Nome do produto é obrigatório", {
                    position: toast.POSITION.TOP_CENTER,
                    theme: "colored"
                });
                return
            }else if (!unitCost) {
                toast.error("Custo unitário é obrigatório", {
                    position: toast.POSITION.TOP_CENTER,
                    theme: "colored"
                });
                return
            }else if (!description) {
                toast.error("Descrição é obrigatória", {
                    position: toast.POSITION.TOP_CENTER,
                    theme: "colored"
                });
                return
            }else if (!providers) {
                toast.error("Fornecedor é obrigatório", {
                    position: toast.POSITION.TOP_CENTER,
                    theme: "colored"
                });
                return
            }else if (!groups) {
                toast.error("Grupo é obrigatório", {
                    position: toast.POSITION.TOP_CENTER,
                    theme: "colored"
                });
                return
            }

            await fetch(SERVER + "/produtos",
            {
                headers: {
                  'Accept': 'application/json',
                  'Content-Type': 'application/json'
                },
                method: "POST",
                body: JSON.stringify({
                  "image_url": imageUrl,
                  "product_name": productName,
                  "unit_cost": unitCost,
                  "description": description,
                  "provider": provider,
                  "group": group,
                })
              }
            );

            toast.success("Produto cadastrado com sucesso", {
                position: toast.POSITION.TOP_CENTER,
                theme: "colored"
            });

            history.push("/stored");
            
        } catch (error) {
            toast.error("Houve um problema no cadastro de novo produto. Estamos tentando resolver!", {
                position: toast.POSITION.TOP_CENTER,
                theme: "colored"
            });
            history.push("/stored");
        }

    }

    useEffect(() => {

        async function getProvider() {
          const result = await fetch(SERVER + "/fornecedores");
          const data = await result.json();
          setProviders(data);
        }
    
        getProvider();
    
      }, []);

      useEffect(() => {

        async function getGroup() {
          const result = await fetch(SERVER + "/categorias");
          const data = await result.json();
          setGroups(data);
        }
    
        getGroup();
    
      }, []);

    return (
        
        <form className="container-form-products" onSubmit={handleSubmit}>
            <div className="form-header">
                <h1>Novo produto</h1>
                <div className="form-button">
                    <button className="btn-cancel" onClick={() => history.push('/stored')}>Cancelar</button>
                    <button className="btn-products" type="submit">Salvar</button>
                </div>
            </div>
            
            <hr/>

            <div className="img-container">
                {imageUrl && (<div className="image-url"><img src={imageUrl} style={{width: "10em", height: "10em"}} alt="Imagem do produto"/></div>)}
            </div>

            <div className="product-data">
                <div className="product-url">
                    <label><input className="url-input" type="url" pattern="https://.*" value={imageUrl} onChange={(event) => setImageUrl(event.target.value)}></input>URL da imagem*</label>
                </div>

                <div className="product-info">
                    <label><input className="name-input" type="text" value={productName} onChange={(event) => setProductName(event.target.value)}></input>Nome*</label>
                    <label><input type="number" value={unitCost} onChange={(event) => setUnitCost(event.target.value)}></input>Custo unitário*</label>
                </div>

                <div className="product-description">
                    <label><textarea  value={description} onChange={(event) => setDescription(event.target.value)}></textarea>Descrição*</label>
                </div>
            </div>

            <hr/>

            <div className="product-select">
                <label><select value={provider} onChange={(event) => setProvider(event.target.value)}><option value="" selected disabled>Selecione um fornecedor</option>{providers.map((provider) => (<option value={provider}>{provider}</option>))}</select>Fornecedor*</label>
                <label><select value={group} onChange={(event) => setGroup(event.target.value)}><option value="" selected disabled>Selecione um grupo</option>{groups.map((group) => (<option value={group}>{group}</option>))}</select>Grupo*</label>
            </div>

            <hr/>

        </form>
        
    )
}

export default Products;