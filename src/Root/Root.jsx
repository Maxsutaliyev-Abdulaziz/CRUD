import React, { Component } from "react";
import { data } from "../Mock/data";
import './index.css';


class Root extends Component {
    constructor(props) {
        super(props);
        this.state = {
            list: data,
            selected: null,
        }
    }
    render() {
        const onEdit = (selected) => {
            this.setState({ selected })
        };
        const onClick = () => {
            let res = this.state.list.map((value) => value.id === this.state.selected.id ? this.state.selected : value)
            this.setState({ list: res, selected: null });
            console.log({ list: res, selected: null });
        };
        const onChangee = ({ target: { value, name } }) => {
            this.setState((state) => { return { selected: { ...state.selected, [name]: value } } })
        };
        return (
            <div className="box">
                <div className="border">
                    <div className="big-name">
                        <h1 className="ht id">№</h1>
                        <h1 className="ht name">Name</h1>
                        <h1 className="ht age">Age</h1>
                        <h1 className="ht address">Address</h1>
                        <h1 className="ht status">Status</h1>
                        <h1 className="ht nickname">Nickname</h1>
                        <h1 className="ht univ">Univ</h1>
                        <h1 className="ht job">Job</h1>
                        <h1 className="ht edite edit">Edit</h1>
                    </div>
                    <h1>
                        {this.state.list.map((vl, id) => (
                            <div className="big-box" key={id}>
                                <h5 className="pt id">{vl.id}</h5>
                                {
                                    this.state.selected?.id === vl.id ? (
                                        <>
                                            <input className="pt input name" onChange={onChangee} name="name" defaultValue={this.state.selected.name} type="text" />
                                        </>
                                    ) : (
                                        <h5 className="pt name">{vl.name}</h5>
                                    )
                                }
                                {
                                    this.state.selected?.id === vl.id ? (
                                        <>
                                            <input className="pt input age" onChange={onChangee} name="age" defaultValue={this.state.selected.age} type="text" />
                                        </>
                                    ) : (
                                        <h5 className="pt age">{vl.age}</h5>
                                    )
                                }
                                {
                                    this.state.selected?.id === vl.id ? (
                                        <>
                                            <input className="pt input address" onChange={onChangee} name="address" defaultValue={this.state.selected.address} type="text" />
                                        </>
                                    ) : (
                                        <h5 className="pt address">{vl.address}</h5>
                                    )
                                }
                                {
                                    this.state.selected?.id === vl.id ? (
                                        <>
                                            <input className="pt input status" onChange={onChangee} name="status" defaultValue={this.state.selected.status} type="text" />
                                        </>
                                    ) : (
                                        <h5 className="pt status">{vl.status}</h5>
                                    )
                                }
                                {
                                    this.state.selected?.id === vl.id ? (
                                        <>
                                            <input className="pt input nickname" onChange={onChangee} name="nickname" defaultValue={this.state.selected.nickname} type="text" />
                                        </>
                                    ) : (
                                        <h5 className="pt nickname">{vl.nickname}</h5>
                                    )
                                }
                                {
                                    this.state.selected?.id === vl.id ? (
                                        <>
                                            <input className="pt input univ" onChange={onChangee} name="univ" defaultValue={this.state.selected.univ} type="text" />
                                        </>
                                    ) : (
                                        <h5 className="pt univ">{vl.univ}</h5>
                                    )
                                }
                                {
                                    this.state.selected?.id === vl.id ? (
                                        <>
                                            <input className="pt input job" onChange={onChangee} name="job" defaultValue={this.state.selected.job} type="text" />
                                        </>
                                    ) : (
                                        <h5 className="pt job">{vl.job}</h5>
                                    )
                                }
                                <h1 className="edit">
                                    {
                                        this.state.selected?.id === vl.id ? (
                                            <>
                                                <button onClick={onClick} className="ptb savebtn">{'save'}</button>
                                                <button className="ptb cancelbtn" onClick={() => this.setState({ selected: null })}>{'cancel'}</button>
                                            </>
                                        ) : (
                                            <button onClick={() => onEdit(vl)} className="ptb">{vl.edit}</button>
                                        )
                                    }
                                </h1>
                            </div>

                        ))}
                    </h1>
                </div>
            </div>
            // <h1>salom</h1>
        )
    }
}




export default Root;
