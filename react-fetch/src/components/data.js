import React from 'react';
import Title from './title';
import TVImage from './tvImage';

const tvdata = {
    mylist: [{
        title: "Futurama",
        id: 1,
        img: "http://cdn1.nflximg.net/webp/7621/3787621.webp"
    },
    {
        title: "The Interview",
        id: 2,
        img: "http://cdn1.nflximg.net/webp/1381/11971381.webp"
    },
    {
        title: "Gilmore Girls",
        id: 3,
        img: "http://cdn1.nflximg.net/webp/7451/11317451.webp"
    }
    ],
    recommendations: [{
        title: "Family Guy",
        id: 4,
        img: "http://cdn5.nflximg.net/webp/5815/2515815.webp"
    },
    {
        title: "The Croods",
        id: 5,
        img: "http://cdn3.nflximg.net/webp/2353/3862353.webp"
    },
    {
        title: "Friends",
        id: 6,
        img: "http://cdn0.nflximg.net/webp/3200/9163200.webp"
    }
    ]
};

export default class TVData extends React.Component {
    handleClick(e) {
        const title = e.target.value;
        this.props.addTitleToList(title);
       // console.log(e.target.value);
    }

    render() {
        return (
            <ol className="row">
                {
                    tvdata.mylist.map(
                        props => (
                            <li key={Math.random().toString()} className="col-xs-12 col-sm-6 col-md-4 col-lg-3 card-body">
                                <TVImage src={props.img} />
                                <Title title={props.title} />
                                <button className="tv-btn" title={props.title} value={props.title} onClick={this.handleClick.bind(this)}>
                                    Add
                                </button>
                            </li>
                        )
                    )
                }
            </ol>
        );
    }
}

