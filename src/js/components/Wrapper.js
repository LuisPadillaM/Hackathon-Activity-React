import NavInstance from "./Navbar";
import Banner from "./Banner";
import Menu from "./Form";
import Footer from "./Footer";

export class Wrapper extends React.Component{

  constructor(props){
    super(props);
    this.state = {
      fields: []

    }

    this.addField = this.addField.bind(this);
    this.submit = this.submit.bind(this);
  }

  addField(field, cb){
    console.log("called add field");
    const fields = [
      ...this.state.fields,
      field
    ];

    (cb) ? this.setState({fields}, cb) : this.setState({fields});

  }

  submit(){
    console.log("submited");
    console.log(this.state);
  }

  render(){
    const { data } = this.props;
    return (
      <div>
        <NavInstance options={data.headerOptions} />
        <div className="container-fluid" id="mainContainer">
          <Banner bannerImage = {data.bannerImage}/>
          <Menu days={data.formDays} loader={data.loaderImg} onSelect={this.addField} />
          <Footer Images={data.footerImgs} onSelect={this.addField} onSubmit={this.submit} />
        </div>
      </div>
    )
  }

}

export default Wrapper;
