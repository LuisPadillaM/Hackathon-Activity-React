const toUpper = (txt) => {
  return txt.replace(/\w\S*/g, (txt) => { return txt.charAt(0).toUpperCase() + txt.substr(1); });
}

const checkBoxes = ({menu, day = "[day]", onSelect}) =>
  <div id={day + "_collapse"}>
    { menu.map((item, i) =>
      <div className='checkbox'>
        <label>
          <input type='checkbox' onClick={ (event) => oneAtTime(event, onSelect) } className={"checkbox chk_" + day} form={ $("#formMenu").attr("id")} name={day} value={item} />
          <span className="cr">
            <i className="cr-icon glyphicon glyphicon-ok"></i>
          </span>
          { toUpper(item) }
        </label>
      </div>
      )
    }
  </div>

checkBoxes.propTypes = { // we also con use them as static class fields inside classes
  menu: React.PropTypes.array.isRequired,
  day: React.PropTypes.string.isRequired
}

const oneAtTime = (e, onSelect) => {


  const $box = $(e.target);

  if ($box.prop("checked")){
    $("." + $box.attr("class").split(" ")[1]).prop("checked", false);
    $box.prop("checked", true);
  } else {
    $box.prop("checked", false);
  }

  onSelect({ value: $box.val()}); // pasar un object para saber que dia pertenece a que valor
}

checkBoxes.defaultProps = { // or doing it when destructure the properties object in the function arguments
  day: "[day]"
}

export default checkBoxes;
