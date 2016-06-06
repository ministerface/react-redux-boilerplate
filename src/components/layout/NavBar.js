import React, { Component } from 'react';

export default class NavBar extends Component {
  render() {
    return (
      <div className="navbar-custom">
        <div className="container">
          <div id="navigation">
            <ul className="navigation-menu">
              <li>
                <a href=""><i className="md md-dashboard"></i>Главная</a>
              </li>
              <li className="has-submenu active">
                <a href="crm-opportunities.html#"><i className="md md-color-lens"></i>Задачи</a>
                <ul className="submenu">
                  <li><a href="ui-buttons.html">Buttons</a></li>
                  <li><a href="ui-panels.html">Panels</a></li>
                  <li><a href="ui-portlets.html">Portlets</a></li>
                  <li><a href="ui-checkbox-radio.html">Checkboxs-Radios</a></li>
                  <li><a href="ui-tabs.html">Tabs</a></li>
                  <li><a href="ui-modals.html">Modals</a></li>
                  <li><a href="ui-progressbars.html">Progress Bars</a></li>
                  <li><a href="ui-notification.html">Notification</a></li>
                  <li><a href="ui-images.html">Images</a></li>
                  <li><a href="ui-carousel.html">Carousel</a></li>
                  <li><a href="ui-bootstrap.html">Bootstrap UI</a></li>
                  <li><a href="ui-typography.html">Typography</a></li>
                </ul>
              </li>


              <li className="has-submenu">
                <a href="crm-opportunities.html#"><i className="md md-layers"></i>Проекты</a>
                <ul className="submenu megamenu">
                  <li>
                    <ul>
                      <li>
                        <span>Elements</span>
                      </li>
                      <li><a href="components-grid.html">Grid</a></li>
                      <li><a href="components-widgets.html">Widgets</a></li>
                      <li><a href="components-nestable-list.html">Nesteble</a></li>
                      <li><a href="components-range-sliders.html">Range sliders</a></li>
                      <li><a href="components-animation.html">Animation</a></li>
                      <li><a href="components-sweet-alert.html">Sweet Alerts</a></li>
                      <li><a href="components-treeview.html">Tree view</a></li>
                      <li><a href="components-tour.html">Tour</a></li>
                    </ul>
                  </li>
                  <li>
                    <ul>
                      <li>
                        <span>Forms</span>
                      </li>
                      <li><a href="form-elements.html">General Elements</a></li>
                      <li><a href="form-advanced.html">Advanced Form</a></li>
                      <li><a href="form-validation.html">Form Validation</a></li>
                      <li><a href="form-pickers.html">Form Pickers</a></li>
                      <li><a href="form-wizard.html">Form Wizard</a></li>

                    </ul>
                  </li>

                  <li>
                    <ul>
                      <li>
                        <span>Forms</span>
                      </li>
                      <li><a href="form-mask.html">Form Masks</a></li>
                      <li><a href="form-summernote.html">Summernote</a></li>
                      <li><a href="form-wysiwig.html">Wysiwig Editors</a></li>
                      <li><a href="form-uploads.html">Multiple File Upload</a></li>
                      <li><a href="form-xeditable.html">X-editable</a></li>
                      <li><a href="form-image-crop.html">Image Crop</a></li>
                    </ul>
                  </li>
                </ul>
              </li>
              <li className="has-submenu">
                <a href="crm-opportunities.html#"><i className="md md-class"></i>Финансы</a>
                <ul className="submenu">
                  <li className="has-submenu">
                    <a href="crm-opportunities.html#">Tables</a>
                    <ul className="submenu">
                      <li><a href="tables-basic.html">Basic Tables</a></li>
                      <li><a href="tables-datatable.html">Data Table</a></li>
                      <li><a href="tables-editable.html">Editable Table</a></li>
                      <li><a href="tables-responsive.html">Responsive Table</a></li>
                      <li><a href="tables-foo-tables.html">FooTable</a></li>
                      <li><a href="tables-bootstrap.html">Bootstrap Tables</a></li>
                      <li><a href="tables-tablesaw.html">Tablesaw</a></li>
                    </ul>
                  </li>
                  <li className="has-submenu">
                    <a href="crm-opportunities.html#">Charts</a>
                    <ul className="submenu">
                      <li><a href="chart-flot.html">Flot Chart</a></li>
                      <li><a href="chart-morris.html">Morris Chart</a></li>
                      <li><a href="chart-chartjs.html">Chartjs</a></li>
                      <li><a href="chart-peity.html">Peity Charts</a></li>
                      <li><a href="chart-chartist.html">Chartist Charts</a></li>
                      <li><a href="chart-c3.html">C3 Charts</a></li>
                      <li><a href="chart-nvd3.html"> Nvd3 Charts</a></li>
                      <li><a href="chart-sparkline.html">Sparkline charts</a></li>
                      <li><a href="chart-radial.html">Radial charts</a></li>
                      <li><a href="chart-other.html">Other Chart</a></li>
                      <li><a href="chart-ricksaw.html">Ricksaw Chart</a></li>
                    </ul>
                  </li>
                  <li className="has-submenu">
                    <a href="crm-opportunities.html#">Icons</a>
                    <ul className="submenu">
                      <li><a href="icons-glyphicons.html">Glyphicons</a></li>
                      <li><a href="icons-materialdesign.html">Material Design</a></li>
                      <li><a href="icons-ionicons.html">Ion Icons</a></li>
                      <li><a href="icons-fontawesome.html">Font awesome</a></li>
                      <li><a href="icons-themifyicon.html">Themify Icons</a></li>
                      <li><a href="icons-simple-line.html">Simple line Icons</a></li>
                      <li><a href="icons-weather.html">Weather Icons</a></li>
                      <li><a href="icons-typicons.html">Typicons</a></li>
                    </ul>
                  </li>
                  <li className="has-submenu">
                    <a href="crm-opportunities.html#">Maps</a>
                    <ul className="submenu">
                      <li><a href="map-google.html"> Google Map</a></li>
                      <li><a href="map-vector.html"> Vector Map</a></li>
                    </ul>
                  </li>
                </ul>
              </li>

              <li className="has-submenu">
                <a href="crm-opportunities.html#"><i className="md md-pages"></i>Заказчики</a>
                <ul className="submenu megamenu">
                  <li>
                    <ul>
                      <li><a href="page-starter.html">Starter Page</a></li>
                      <li><a href="page-login.html">Login</a></li>
                      <li><a href="page-login-v2.html">Login v2</a></li>
                      <li><a href="page-register.html">Register</a></li>
                      <li><a href="page-register-v2.html">Register v2</a></li>
                      <li><a href="page-signup-signin.html">Signin - Signup</a></li>
                      <li><a href="page-recoverpw.html">Recover Password</a></li>
                    </ul>
                  </li>
                  <li>
                    <ul>
                      <li><a href="page-lock-screen.html">Lock Screen</a></li>
                      <li><a href="page-400.html">Error 400</a></li>
                      <li><a href="page-403.html">Error 403</a></li>
                      <li><a href="page-404.html">Error 404</a></li>
                      <li><a href="page-404_alt.html">Error 404-alt</a></li>
                      <li><a href="page-500.html">Error 500</a></li>
                      <li><a href="page-503.html">Error 503</a></li>
                    </ul>
                  </li>
                </ul>
              </li>
              </ul>
            </div>
          </div>
        </div>
    );
  }
}
