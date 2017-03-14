class ModalForm extends React.Component {

  constructor(props){
    super(props);
    this.submit = this.submit.bind(this);
  }

  validate($form){
    return ($(".checkbox:checked").length > 0 && $("#formMenu #name").val()) ? true : false;
  }


  submit(e){

    const $form = e.target;

  //  if (validate($form)){

    // const formArray = $($form).serializeArray();
    // const jsondata = {};

    // formArray.map((val, index) => {
    //   jsondata[val.name] = val.value;
    // });

    // console.log(formArray);

  //   // ajax request
  //   $.ajax({
  //     type: "POST",
  //     crossDomain: true,
  //     url: "http://localhost:8888/RenowingPHP/menu.php",
  //     data: jsondata
  //     // dataType: "json"
  //   })
  //   .done(function(msg) {
  //     if (msg){
  //       console.log(msg);
  //     } else {
  //       console.log("error");
  //     }
  //     // this.props.onModal();
  //   });

    e.preventDefault();


    // } else {
    //   alert("Debe escribir un nombre y escoger al menos un elemento del menu");
    // }

    const { _name } = this.refs;
    this.props.onSelect({ value: _name.value}, this.props.onSubmit);
  }

  render(){
    return (
      <form id="formMenu" onSubmit={ this.submit }>
        <div className="form-group">
          <label for="name">Nombre</label>
          <input type="text" className="form-control" id="name" placeholder="Escriba su nombre" ref="_name" required />
        </div>
      </form>
    );
  }
}

export default ModalForm;



