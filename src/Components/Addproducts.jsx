import React, { useContext, useState } from 'react';
import {
    MDBInput,
    MDBBtn,
    MDBRadio,
    MDBFile,
    MDBTextArea
} from 'mdb-react-ui-kit';
import Admin from './Admin';
import { passingProducts } from './Main';
import { useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2';
import axios from 'axios';

const Addproducts = () => {
    const [addproduct, setAddproduct] = useState({
        title: '',
        category: '',
        price: '',
        description: '',
        image: null
    });

    const { products, setProducts } = useContext(passingProducts);
    const nav = useNavigate();

    const handleChange = (e) => {
        const { name, value, files } = e.target;
        setAddproduct((prev) => ({
            ...prev,
            [name]: files ? files[0] : value
        }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const formData = new FormData();
            formData.append('title', addproduct.title);
            formData.append('description', addproduct.description);
            formData.append('category', addproduct.category);
            formData.append('price', addproduct.price);

            // Check if image is present and append
            if (addproduct.image) {
                formData.append('image', addproduct.image);
            } else {
                console.log('No image selected');
                Swal.fire({
                    text: 'Please select an image to upload',
                    icon: 'warning',
                    confirmButtonText: 'OK'
                });
                return;
            }
   console.log(formData);
            // Log formData entries for debugging
            for (let [key, value] of formData.entries()) {
                console.log(key, value);
            }

            const config = {
                headers: {
                    'Content-Type': 'multipart/form-data'
                }
            };

            const response = await axios.post('http://localhost:7878/api/admin/createProducts', formData, config);

            console.log(response);
            Swal.fire({
                text: response.data.message,
                icon: 'success',
                confirmButtonText: 'OK'
            });

            // Optionally, update the products state
            // setProducts([...products, response.data.newProduct]);

        } catch (error) {
            Swal.fire({
                text: error.response?.data?.message || 'Something went wrong',
                icon: 'error',
                confirmButtonText: 'OK'
            });
        }
    };

    return (
        <>
            <Admin />
            <div className='top'>
                <div className='container' style={{ width: "100%", height: "100vh", display: "flex", justifyContent: "center", alignItems: "center" }}>
                    <div style={{ width: "500px", height: "500px", padding: "10px", backgroundColor: 'rgba(255, 255, 255, 0.5)', backdropFilter: 'blur(2px)' }}>
                        <form onSubmit={handleSubmit}>
                            <MDBInput
                                wrapperClass='mb-4'
                                required
                                type='text'
                                label='Product name'
                                name='title'
                                onChange={handleChange}
                            />
                            <MDBRadio
                                name='category'
                                required
                                id='inlineRadio1'
                                value='Cat'
                                label='Cat'
                                inline
                                onChange={handleChange}
                            />
                            <MDBRadio
                                name='category'
                                required
                                id='inlineRadio2'
                                value='Dog'
                                label='Dog'
                                inline
                                onChange={handleChange}
                            />
                            <MDBInput
                                wrapperClass='mb-4'
                                required
                                type='number'
                                label='Price'
                                name='price'
                                onChange={handleChange}
                            />
                            <MDBTextArea
                                wrapperClass='mb-4'
                                required
                                label='Description'
                                name='description'
                                onChange={handleChange}
                            />
                            <MDBFile
                                wrapperClass='mb-4'
                                name='image'
                                onChange={handleChange}
                            />
                            <MDBBtn className='mb-4' type='submit'>
                                Add product
                            </MDBBtn>
                        </form>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Addproducts;
