import React, { Component } from 'react';
import Catalog from '../services/Catalog';
import CatalogService from '../services/Catalog';
class AddReview extends Component {
    reviewerRef=React.createRef();
    starRatingRef =React.createRef();
    titleRef = React.createRef();
    textRef = React.createRef();

    addReview=(ev)=>{
        ev.preventDefault();
        const review={
            reviewer:this.reviewerRef.current.value,
            starRating:this.starRatingRef.current.value,
            title:this.titleRef.current.value,
            text:this.textRef.current.value
        }
        CatalogService.addReview(review,this.props.match.params.id)
        // .then(function(updatedReview){
        //     alert(`your review was successfully posted`);
        //    // this.props.history.push('')
        // })
        // .catch(function(){
        //   alert('there was a problem posting your reviews');
        // });
    }
    render() {
        return (
            <div>
                <h1>Add a Review</h1>
                <hr />
                <form className="form-horizontal" onSubmit={this.addReview}>
                    <div class="form-group">
                      <label for="reviewer">Your Name:</label>
                      <input type="text" name="reviewer" id="reviewer" class="form-control" placeholder="" aria-describedby="reviewerhelp" ref={this.reviewerRef}/>
                      <small id="reviewerhelp" class="text-muted">Place enter your name</small>
                      
                    </div>

                    <div class="form-group">
                      <label for="starRating">Rating</label>
                      <select name="starRating" id="starRating" class="form-control" placeholder="" aria-describedby="starRatinghelp" ref={this.starRatingRef}>
                          
                              <option></option>
                              <option>1</option>
                              <option>2</option>
                               <option>3</option>
                             <option>4</option>
                             <option>5</option>
                          </select>
                      <small id="starRatinghelp" class="text-muted">Please choose a rating between 1 to 5</small>
                      
                    </div>

                    <div class="form-group">
                      <label for="title">Title</label>
                      <input type="text" name="title" id="title" class="form-control" placeholder="" aria-describedby="titlehelp" ref={this.titleRef}/>
                      <small id="titlehelp" class="text-muted">Place provide a title for your review</small>
                      
                    </div>
                    <div class="form-group">
                      <label for="text">Text</label>
                      <input type="text" name="text" id="text" class="form-control" placeholder="" aria-describedby="texthelp" ref={this.textRef}/>
                      <small id="texthelp" class="text-muted">Place give the explanation of the product</small>
                      
                    </div>
                    <div class ="form-group">
                        <button className="btn btn-sm btn-primary">Submit</button>
                    </div>

                </form>
            </div>
        );
    }
}

export default AddReview;