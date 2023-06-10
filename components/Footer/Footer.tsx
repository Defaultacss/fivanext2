import React from 'react';
import { MDBFooter } from 'mdb-react-ui-kit';
import Link from 'next/link';

const Footer = () => {
    return (
        <MDBFooter bgColor='light' className='text-center text-lg-start text-muted'>
            <section className='d-flex justify-content-center justify-content-lg-between p-4 border-bottom'>
                <div className='me-5 d-none d-lg-block'>
                    <span>Get connected with us:</span>
                </div>

                <div>
                    <Link href='' className='me-4 text-reset'>
                        <i className='fab fa-facebook-f'></i>
                    </Link>
                    <Link href='' className='me-4 text-reset'>
                        <i className='fab fa-twitter'></i>
                    </Link>
                    <Link href='' className='me-4 text-reset'>
                        <i className='fab fa-google'></i>
                    </Link>
                    <Link href='' className='me-4 text-reset'>
                        <i className='fab fa-instagram'></i>
                    </Link>
                    <Link href='' className='me-4 text-reset'>
                        <i className='fab fa-linkedin'></i>
                    </Link>
                    <Link href='' className='me-4 text-reset'>
                        <i className='fab fa-github'></i>
                    </Link>
                </div>
            </section>

            <section className=''>
                <div className='container text-center text-md-start mt-5'>
                    <div className='row mt-3'>
                        <div className='col-md-3 col-lg-4 col-xl-3 mx-auto mb-4'>
                            <h6 className='text-uppercase fw-bold mb-4'>
                                <i className='fas fa-gem me-3'></i>
                                Fiva.
                            </h6>
                            <p>
                                En Fiva nos comprometemos a reducir la factura de nuestros clientes
                                aportándoles los mejores servicios y productos.
                            </p>
                            <p>
                                En Fiva tenemos el Software de optimización de potencia eléctrica más
                                preciso del mercado.
                            </p>
                        </div>

                        <div className='col-md-2 col-lg-2 col-xl-2 mx-auto mb-4'>
                            <h6 className='text-uppercase fw-bold mb-4'>Servicios</h6>
                            <p>
                                <Link href='/power' className='text-reset'>
                                    Ajuste de optimización de potencia
                                </Link>
                            </p>
                            <p>
                                <Link href='/energy' className='text-reset'>
                                    Estudios de eficiencia energética
                                </Link>
                            </p>
                            <p>
                                <Link href='/transition' className='text-reset'>
                                    Transición a energía renovable
                                </Link>
                            </p>
                            <p>
                                <Link href='/solutions' className='text-reset'>
                                    Soluciones de software
                                </Link>
                            </p>
                        </div>

                        <div className='col-md-4 col-lg-3 col-xl-3 mx-auto mb-md-0 mb-4'>
                            <h6 className='text-uppercase fw-bold mb-4'>Contact</h6>

                            <p>
                                <i className='fas fa-envelope me-3'>
                                    contacto@fiva.es
                                </i>
                            </p>
                            {/* <p>
                                <i className='fas fa-phone me-3'>
                                    Equipo comercial
                                </i> +34 624 43 64 42
                            </p> */}
                            <p>
                                <i className='fas fa-print me-3'>
                                    Teléfono
                                </i> +34 601 11 87 39
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            <div className='text-center p-4' style={{ backgroundColor: 'rgba(0, 0, 0, 0.05)' }}>
                © 2022 Copyright:
                <Link className='text-reset fw-bold' href='/'>
                    fiva.
                </Link>
            </div>
        </MDBFooter>
    );
};

export default Footer;