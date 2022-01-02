import React from 'react';
import Loading from './Loading';


const LoadingItem = () => {
    return (
        <section className="section loading-article">
            <Loading type="thumbnail" />
            <Loading type="title" />
            <div className='drink'>
                <Loading type="image" />
                <div className="drink-info">
                    {[1,2].map(n => <div key={n}>
                    <Loading type="text1"/>
                    <Loading type="text2" />
                    </div>)}
                </div>
            </div>
        </section>
    );
};

export default LoadingItem;
