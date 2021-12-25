import React from 'react'
import { Link } from 'react-router-dom'

function NotFound() {
    return (
        <body class="vh-100 bg-secondary">
    <div class="authincation h-100">
        <div class="container h-100">
            <div class="row justify-content-center h-100 align-items-center">
                <div class="col-md-8">
                    <div class="form-input-content text-center error-page">
                        <h1 class="error-text font-weight-bold">Error 404</h1>
                        <h4><i class="fa fa-exclamation-triangle text-warning"></i> The page you were looking for is not found!</h4>
                        <p class="text-white">You may have mistyped the address or the page may have moved.</p>
                        
						<div>
                            <Link to="/home"><a class="btn btn-primary text-white">Back to Home</a></Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</body>
    )
}

export default NotFound
