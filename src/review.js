import React from "react";
export default class Review extends React.Component { 
    render()
    {
        return(        <div className="review_box">
               
        <p>
        <i className="fas fa-star" />
        <i className="fas fa-star" />
        <i className="fas fa-star" />
        <i className="fas fa-star" />
        <i className={this.props.star}/>
       
      </p>
      <div class="client_img">
<img src={this.props.food} alt="Best Indian snacks 2019" class="transition--fade-in lazyautosizes lazyloaded" sizes="70px"/>
<i className="fas fa-check-circle" />
</div>
      <div className="review_main">
      <h4 class="client_name">{this.props.client_name}</h4>
      <p class="review_desc">
          {this.props.review_desc}
          </p>
          <p class="review_author">{this.props.review_author}</p>
        </div>
        </div>)
    }
}