import axios from "axios";
import "../style/comment.scss";

const Comment = () => {
  async function handleAddCommet(e: any) {
    e.preventDefault();
    const comment = e.target.comment.value;
    const { data } = await axios.post("/api/comment/add-comment", { comment });
  }

  return (
    <div className="containerComment">
		<div className="col-md-12" id="fbcomment">
			<div className="body_comment">
				<div className="row">
					<div className="avatar_comment col-md-1">
					  <img src="https://static.xx.fbcdn.net/rsrc.php/v1/yi/r/odA9sNLrE86.jpg" alt="avatar"/>
					</div>
					<form onSubmit={handleAddCommet} className="box_comment col-md-11">
					  <textarea name="comment" className="commentar" placeholder="Add a comment..."></textarea>
					  <div className="box_post">
						<div className="pull-right">
              <input type="submit" value="SEND" id="button-blue" className="button" />
						</div>
					  </div>
					</form>
				</div>
				<div className="row">
					<ul id="list_comment" className="col-md-12">
						<li className="box_result row">
							<div className="avatar_comment col-md-1">
								<img src="https://static.xx.fbcdn.net/rsrc.php/v1/yi/r/odA9sNLrE86.jpg" alt="avatar"/>
							</div>
							<div className="result_comment col-md-11">
								<h4>Nath Ryuzaki</h4>
								<p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's.</p>
								<div className="tools_comment">
									<a className="like" href="#">Like</a>
									<span aria-hidden="true"> · </span>
									<a className="replay" href="#">Reply</a>
									<span aria-hidden="true"> · </span>
									<i className="fa fa-thumbs-o-up"></i> <span className="count">1</span> 
									<span aria-hidden="true"> · </span>
									<span>26m</span>
								</div>
							</div>
						</li>
						

						<li className="box_result row">
							<div className="avatar_comment col-md-1">
								<img src="https://static.xx.fbcdn.net/rsrc.php/v1/yi/r/odA9sNLrE86.jpg" alt="avatar"/>
							</div>
							<div className="result_comment col-md-11">
								<h4>Gung Wah</h4>
								<p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's.</p>
								<div className="tools_comment">
									<a className="like" href="#">Like</a>
									<span aria-hidden="true"> · </span>
									<a className="replay" href="#">Reply</a>
									<span aria-hidden="true"> · </span>
									<i className="fa fa-thumbs-o-up"></i> <span className="count">1</span> 
									<span aria-hidden="true"> · </span>
									<span>26m</span>
								</div>
								<ul className="child_replay"></ul>
							</div>
						</li>
					</ul>
				{/* <button className="show_more" type="button">Load 42 more comments</button>
          <button className="show_less" type="button" style="display:none"><span className="spinner-border spinner-border-sm" role="status" aria-hidden="true"></span> Loading...</button> */}
				</div>
			</div>
		</div>
	</div>
  );
};

export default Comment;
