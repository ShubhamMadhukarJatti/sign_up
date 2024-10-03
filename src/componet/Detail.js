const Detail=(props)=>{
    return(
        <div>
            {
                props.regdata.map((userinfo,index)=>{
                    return (
                        <div key={index}>
                            <h1>EMAIL:-{userinfo.email}<br/>
                                NAME:-{userinfo.name}<br/>
                                AGE:-{userinfo.age}<br/>
                                DATE:-{userinfo.date}<br/>
                                STATE:-{userinfo.state}<br/></h1>
                        </div>
                    );
                })

            }
        </div>
    );
}
export default Detail; 