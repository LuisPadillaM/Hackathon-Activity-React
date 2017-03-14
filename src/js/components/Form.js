import CheckBox from "./Checkboxes";
import DataComponent from "./DataComponent";

const FormMenu = ({ data, days, onSelect}) =>
  <div className="formContainer" id="menu-web">
    <div className="row">
        { days.map((day, i) =>
          <div className={"day_box  col-sm-2 " + (i === 0 ? "col-md-offset-1 col-lg-offset-1 col-sm-offset-1" : "")} >
            <h3 className="mb-0" type="button" data-toggle="collapse" data-target={`#${day.toLowerCase()}_collapse`} aria-expanded="false" aria-controls={`#${day.toLowerCase()}_collapse`}>
              {day} <span className="glyphicon glyphicon-chevron-down pull-right visible-xs"></span>
            </h3>
            <CheckBox menu={ data.menus[i]} day={ data.days[i]} onSelect={ onSelect} />
          </div>
        )}
    </div>
  </div>

const MenuCP = DataComponent(FormMenu);

export default MenuCP;
