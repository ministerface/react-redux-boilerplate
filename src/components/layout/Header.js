import React, { Component } from 'react'

export default class Header extends Component {
  render() {
    return (
      <header id="topnav">
        <div className="topbar-main">
          <div className="container">

            <div className="logo">
              <a href="index.html" className="logo"><span>Ub<i className="md md-album"></i>ld</span></a>
            </div>


            <div className="menu-extras">

              <ul className="nav navbar-nav navbar-right pull-right">
                <li>
                  <form role="search" className="navbar-left app-search pull-left hidden-xs">
                    <input type="text" placeholder="Search..." className="form-control" />
                    <a href="crm-opportunities.html"><i className="fa fa-search"></i></a>
                  </form>
                </li>
                <li className="dropdown hidden-xs">
                  <a href="crm-opportunities.html#" data-target="#" className="dropdown-toggle waves-effect waves-light" data-toggle="dropdown" aria-expanded="true">
                    <i className="icon-bell"></i> <span className="badge badge-xs badge-danger">3</span>
                  </a>
                  <ul className="dropdown-menu dropdown-menu-lg">
                    <li className="notifi-title"><span className="label label-default pull-right">New 3</span>Notification</li>
                    <li className="list-group nicescroll notification-list">

                      <a href="javascript:void(0);" className="list-group-item">
                        <div className="media">
                          <div className="pull-left p-r-10">
                            <em className="fa fa-diamond fa-2x text-primary"></em>
                          </div>
                          <div className="media-body">
                            <h5 className="media-heading">A new order has been placed A new order has been placed</h5>
                            <p className="m-0">
                              <small>There are new settings available</small>
                            </p>
                          </div>
                        </div>
                      </a>


                      <a href="javascript:void(0);" className="list-group-item">
                        <div className="media">
                          <div className="pull-left p-r-10">
                            <em className="fa fa-cog fa-2x text-custom"></em>
                          </div>
                          <div className="media-body">
                            <h5 className="media-heading">New settings</h5>
                            <p className="m-0">
                              <small>There are new settings available</small>
                            </p>
                          </div>
                        </div>
                      </a>


                      <a href="javascript:void(0);" className="list-group-item">
                        <div className="media">
                          <div className="pull-left p-r-10">
                            <em className="fa fa-bell-o fa-2x text-danger"></em>
                          </div>
                          <div className="media-body">
                            <h5 className="media-heading">Updates</h5>
                            <p className="m-0">
                              <small>There are <span className="text-primary font-600">2</span> new updates available</small>
                            </p>
                          </div>
                        </div>
                      </a>


                      <a href="javascript:void(0);" className="list-group-item">
                        <div className="media">
                          <div className="pull-left p-r-10">
                            <em className="fa fa-user-plus fa-2x text-info"></em>
                          </div>
                          <div className="media-body">
                            <h5 className="media-heading">New user registered</h5>
                            <p className="m-0">
                              <small>You have 10 unread messages</small>
                            </p>
                          </div>
                        </div>
                      </a>


                      <a href="javascript:void(0);" className="list-group-item">
                        <div className="media">
                          <div className="pull-left p-r-10">
                            <em className="fa fa-diamond fa-2x text-primary"></em>
                          </div>
                          <div className="media-body">
                            <h5 className="media-heading">A new order has been placed A new order has been placed</h5>
                            <p className="m-0">
                              <small>There are new settings available</small>
                            </p>
                          </div>
                        </div>
                      </a>


                      <a href="javascript:void(0);" className="list-group-item">
                        <div className="media">
                          <div className="pull-left p-r-10">
                            <em className="fa fa-cog fa-2x text-custom"></em>
                          </div>
                          <div className="media-body">
                            <h5 className="media-heading">New settings</h5>
                            <p className="m-0">
                              <small>There are new settings available</small>
                            </p>
                          </div>
                        </div>
                      </a>
                    </li>
                    <li>
                      <a href="javascript:void(0);" className="list-group-item text-right">
                        <small className="font-600">See all notifications</small>
                      </a>
                    </li>
                  </ul>
                </li>

                <li className="dropdown">
                  <a href="crm-opportunities.html" className="dropdown-toggle waves-effect waves-light profile" data-toggle="dropdown" aria-expanded="true">
                    <img src="images/users/avatar-1.jpg" alt="user-img" className="img-circle" /> </a>
                  <ul className="dropdown-menu">
                    <li><a href="javascript:void(0)"><i className="ti-user m-r-5"></i> Profile</a></li>
                    <li><a href="javascript:void(0)"><i className="ti-settings m-r-5"></i> Settings</a></li>
                    <li><a href="javascript:void(0)"><i className="ti-lock m-r-5"></i> Lock screen</a></li>
                    <li><a href="javascript:void(0)"><i className="ti-power-off m-r-5"></i> Logout</a></li>
                  </ul>
                </li>
              </ul>

              <div className="menu-item">

                <a className="navbar-toggle">
                  <div className="lines">
                    <span></span>
                    <span></span>
                    <span></span>
                  </div>
                </a>

              </div>
            </div>

          </div>
        </div>




        <div className="navbar-custom">
          <div className="container">
            <div id="navigation">

              <ul className="navigation-menu">
                <li className="has-submenu">
                  <a href="crm-opportunities.html#"><i className="md md-dashboard"></i>Dashboard</a>
                  <ul className="submenu">
                    <li>
                      <a href="index.html">Dashboard 01</a>
                    </li>
                    <li>
                      <a href="dashboard_2.html">Dashboard 02</a>
                    </li>
                    <li>
                      <a href="dashboard_3.html">Dashboard 03</a>
                    </li>
                  </ul>
                </li>
                <li className="has-submenu">
                  <a href="crm-opportunities.html#"><i className="md md-color-lens"></i>UI Kit</a>
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
                  <a href="crm-opportunities.html#"><i className="md md-layers"></i>Components</a>
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
                  <a href="crm-opportunities.html#"><i className="md md-class"></i>Other</a>
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
                  <a href="crm-opportunities.html#"><i className="md md-pages"></i>Pages</a>
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


                <li className="has-submenu">
                  <a href="crm-opportunities.html#"><i className="md md-folder-special"></i>Extras</a>
                  <ul className="submenu megamenu">
                    <li>
                      <ul>
                        <li><a href="extra-profile.html">Profile</a></li>
                        <li><a href="extra-timeline.html">Timeline</a></li>
                        <li><a href="extra-sitemap.html">Site map</a></li>
                        <li><a href="extra-invoice.html">Invoice</a></li>
                        <li><a href="extra-email-template.html">Email template</a></li>
                        <li><a href="extra-maintenance.html">Maintenance</a></li>
                        <li><a href="extra-coming-soon.html">Coming-soon</a></li>
                      </ul>
                    </li>
                    <li>
                      <ul>
                        <li><a href="extra-faq.html">FAQ</a></li>
                        <li><a href="extra-search-result.html">Search result</a></li>
                        <li><a href="extra-gallery.html">Gallery</a></li>
                        <li><a href="extra-pricing.html">Pricing</a></li>
                        <li><a href="apps-inbox.html"> Email</a></li>
                        <li><a href="apps-calendar.html"> Calendar</a></li>
                        <li><a href="apps-contact.html"> Contact</a></li>
                      </ul>
                    </li>
                  </ul>
                </li>

                <li className="has-submenu active">
                  <a href="crm-opportunities.html#"><i className="md md-account-circle"></i>CRM</a>
                  <ul className="submenu">
                    <li><a href="crm-dashboard.html"> Dashboard </a></li>
                    <li><a href="crm-contact.html"> Contacts </a></li>
                    <li className="active"><a href="crm-opportunities.html"> Opportunities </a></li>
                    <li><a href="crm-leads.html"> Leads </a></li>
                    <li><a href="crm-customers.html"> Customers </a></li>
                  </ul>
                </li>
                <li className="has-submenu">
                  <a href="crm-opportunities.html#"><i className="md md-shopping-cart"></i>eCommerce</a>
                  <ul className="submenu">
                    <li><a href="ecommerce-dashboard.html"> Dashboard</a></li>
                    <li><a href="ecommerce-products.html"> Products</a></li>
                    <li><a href="ecommerce-product-detail.html"> Product Detail</a></li>
                    <li><a href="http://coderthemes.com/ubold_1.5/menu_2/ecommerce-orders.html"> Orders</a></li>
                    <li><a href="ecommerce-sellers.html"> Sellers</a></li>
                  </ul>
                      </li>
                    </ul>

                  </div>
                </div>
              </div>
            </header>
            );
  }
}
