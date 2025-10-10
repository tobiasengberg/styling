import React from 'react';

const Main = () => {
    return (
        <div className="container">
            <p className="text-uppercase">Distribution</p>
            <h1 className="display-1 fw-lighter">Welcome</h1>
            <p className="display-5 lh-1 p-5 border rounded fst-italic" >Accusamus accusantium aliquam asperiores at deserunt dolores esse et exercitationem fugiat molestias nesciunt odio, odit officia placeat.</p>
            <button className="btn btn-exilic btn-sm">Logga in</button>
            <div className="row">
                <div className="col-md-3">
                    <div className="card">
                        <img src="https://picsum.photos/200" alt="random placeholder" className="card-img-top"/>
                        <div className="card-body">
                            <h3 className="card-title">Product</h3>
                            <p className="card-text">
                                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eius maxime modi molestiae ut. Dignissimos, dolores nihil quibusdam sunt veritatis voluptatem.
                            </p>
                        </div>
                        <div className="card-footer">References</div>
                    </div>
                </div>
                <div className="col-md-3">
                    <div className="card">
                        <img src="https://picsum.photos/200" alt="random placeholder" className="card-img-top"/>
                        <div className="card-body">
                            <h3 className="card-title">Product</h3>
                            <p className="card-text">
                                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eius maxime modi molestiae ut. Dignissimos, dolores nihil quibusdam sunt veritatis voluptatem.
                            </p>
                        </div>
                        <div className="card-footer">References</div>
                    </div>
                </div>
                <div className="col-md-3">
                    <div className="card">
                        <img src="https://picsum.photos/200" alt="random placeholder" className="card-img-top"/>
                        <div className="card-body">
                            <h3 className="card-title">Product</h3>
                            <p className="card-text">
                                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eius maxime modi molestiae ut. Dignissimos, dolores nihil quibusdam sunt veritatis voluptatem.
                            </p>
                        </div>
                        <div className="card-footer">References</div>
                    </div>
                </div>
                <div className="col-md-3">
                    <div className="card text-bg-warning">
                        <img src="https://picsum.photos/200" alt="random placeholder" className="card-img-top"/>
                        <div className="card-body">
                            <h3 className="card-title">Product</h3>
                            <p className="card-text">
                                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eius maxime modi molestiae ut. Dignissimos, dolores nihil quibusdam sunt veritatis voluptatem.
                            </p>
                        </div>
                        <div className="card-footer">References</div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Main;