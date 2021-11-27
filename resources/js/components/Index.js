import React from 'react';
import ReactDOM from 'react-dom';

function Index() {
    return (
        <div className="container">
            <div className="row justify-content-center">
                <div className="col-md-8">
                    <div className="card">
                        <div className="card-header">Main Page Title</div>

                        <div className="card-body">Main Page Content</div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Index;

if (document.getElementById('root')) {
    ReactDOM.render(<Index />, document.getElementById('root'));
}
