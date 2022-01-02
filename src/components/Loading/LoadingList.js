import React from 'react';
import Loading from './Loading';



const LoadingList = () => {
    return (
        <section className="cocktail">
            <article className="loading-list">
                <div className="img-container">
                    <Loading type="image" />
                </div>
                <div className="cocktail-footer">
                    <Loading type="title" />
                    <Loading type="text1" />
                    <Loading type="text2" />
                </div>
            </article>
        </section>
    );
};

export default LoadingList;
