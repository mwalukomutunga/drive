// const RightBar = () => {
//     return ( 
//         <div className="right-bar">
//         <div data-simplebar className="h-100">
//           <ul className="nav nav-tabs nav-bordered nav-justified" role="tablist">
//             <li className="nav-item">
//               <a
//                 className="nav-link py-2"
//                 data-bs-toggle="tab"
//                 href="pages-starter.html#chat-tab"
//                 role="tab"
//               >
//                 <i className="mdi mdi-message-text-outline d-block font-22 my-1"></i>
//               </a>
//             </li>
//             <li className="nav-item">
//               <a
//                 className="nav-link py-2"
//                 data-bs-toggle="tab"
//                 href="pages-starter.html#tasks-tab"
//                 role="tab"
//               >
//                 <i className="mdi mdi-format-list-checkbox d-block font-22 my-1"></i>
//               </a>
//             </li>
//             <li className="nav-item">
//               <a
//                 className="nav-link py-2 active"
//                 data-bs-toggle="tab"
//                 href="pages-starter.html#settings-tab"
//                 role="tab"
//               >
//                 <i className="mdi mdi-cog-outline d-block font-22 my-1"></i>
//               </a>
//             </li>
//           </ul>

//           <div className="tab-content pt-0">
//             <div className="tab-pane" id="chat-tab" role="tabpanel">
//               <form className="search-bar p-3">
//                 <div className="position-relative">
//                   <input
//                     type="text"
//                     className="form-control"
//                     placeholder="Search."
//                   />
//                   <span className="mdi mdi-magnify"></span>
//                 </div>
//               </form>

//               <h6 className="fw-medium px-3 mt-2 text-uppercase">Group Chats</h6>

//               <div className="p-2">
//                 <a
                 
//                   className="text-reset notification-item ps-3 mb-2 d-block"
//                 >
//                   <i className="mdi mdi-checkbox-blank-circle-outline me-1 text-success"></i>
//                   <span className="mb-0 mt-1">App Development</span>
//                 </a>

//                 <a
//                   href="/"
//                   className="text-reset notification-item ps-3 mb-2 d-block"
//                 >
//                   <i className="mdi mdi-checkbox-blank-circle-outline me-1 text-warning"></i>
//                   <span className="mb-0 mt-1">Office Work</span>
//                 </a>

//                 <a
//                   href="/"
//                   className="text-reset notification-item ps-3 mb-2 d-block"
//                 >
//                   <i className="mdi mdi-checkbox-blank-circle-outline me-1 text-danger"></i>
//                   <span className="mb-0 mt-1">Personal Group</span>
//                 </a>

//                 <a
                 
//                   className="text-reset notification-item ps-3 d-block"
//                 >
//                   <i className="mdi mdi-checkbox-blank-circle-outline me-1"></i>
//                   <span className="mb-0 mt-1">Freelance</span>
//                 </a>
//               </div>

//               <h6 className="fw-medium px-3 mt-3 text-uppercase">
//                 Favourites{" "}
//                 <a className="font-18 text-danger">
//                   <i className="float-end mdi mdi-plus-circle"></i>
//                 </a>
//               </h6>

//               <div className="p-2">
//                 <a
                 
//                   className="text-reset notification-item"
//                 >
//                   <div className="d-flex align-items-start">
//                     <div className="position-relative me-2">
//                       <span className="user-status"></span>
//                       <img
//                         src="/assets/images/users/avatar-10.jpg"
//                         className="rounded-circle avatar-sm"
//                         alt="user-pic"
//                       />
//                     </div>
//                     <div className="flex-1 overflow-hidden">
//                       <h6 className="mt-0 mb-1 font-14">Andrew Mackie</h6>
//                       <div className="font-13 text-muted">
//                         <p className="mb-0 text-truncate">
//                           It will seem like simplified English.
//                         </p>
//                       </div>
//                     </div>
//                   </div>
//                 </a>

//                 <a
                 
//                   className="text-reset notification-item"
//                 >
//                   <div className="d-flex align-items-start">
//                     <div className="position-relative me-2">
//                       <span className="user-status"></span>
//                       <img
//                         src="/assets/images/users/avatar-1.jpg"
//                         className="rounded-circle avatar-sm"
//                         alt="user-pic"
//                       />
//                     </div>
//                     <div className="flex-1 overflow-hidden">
//                       <h6 className="mt-0 mb-1 font-14">Rory Dalyell</h6>
//                       <div className="font-13 text-muted">
//                         <p className="mb-0 text-truncate">
//                           To an English person, it will seem like simplified
//                         </p>
//                       </div>
//                     </div>
//                   </div>
//                 </a>

//                 <a
                 
//                   className="text-reset notification-item"
//                 >
//                   <div className="d-flex align-items-start">
//                     <div className="position-relative me-2">
//                       <span className="user-status busy"></span>
//                       <img
//                         src="/assets/images/users/avatar-9.jpg"
//                         className="rounded-circle avatar-sm"
//                         alt="user-pic"
//                       />
//                     </div>
//                     <div className="flex-1 overflow-hidden">
//                       <h6 className="mt-0 mb-1 font-14">Jaxon Dunhill</h6>
//                       <div className="font-13 text-muted">
//                         <p className="mb-0 text-truncate">
//                           To achieve this, it would be necessary.
//                         </p>
//                       </div>
//                     </div>
//                   </div>
//                 </a>
//               </div>

//               <h6 className="fw-medium px-3 mt-3 text-uppercase">
//                 Other Chats{" "}
//                 <a className="font-18 text-danger">
//                   <i className="float-end mdi mdi-plus-circle"></i>
//                 </a>
//               </h6>

//               <div className="p-2 pb-4">
//                 <a
                 
//                   className="text-reset notification-item"
//                 >
//                   <div className="d-flex align-items-start">
//                     <div className="position-relative me-2">
//                       <span className="user-status online"></span>
//                       <img
//                         src="/assets/images/users/avatar-2.jpg"
//                         className="rounded-circle avatar-sm"
//                         alt="user-pic"
//                       />
//                     </div>
//                     <div className="flex-1 overflow-hidden">
//                       <h6 className="mt-0 mb-1 font-14">Jackson Therry</h6>
//                       <div className="font-13 text-muted">
//                         <p className="mb-0 text-truncate">
//                           Everyone realizes why a new common language.
//                         </p>
//                       </div>
//                     </div>
//                   </div>
//                 </a>

//                 <a
                 
//                   className="text-reset notification-item"
//                 >
//                   <div className="d-flex align-items-start">
//                     <div className="position-relative me-2">
//                       <span className="user-status away"></span>
//                       <img
//                         src="/assets/images/users/avatar-4.jpg"
//                         className="rounded-circle avatar-sm"
//                         alt="user-pic"
//                       />
//                     </div>
//                     <div className="flex-1 overflow-hidden">
//                       <h6 className="mt-0 mb-1 font-14">Charles Deakin</h6>
//                       <div className="font-13 text-muted">
//                         <p className="mb-0 text-truncate">
//                           The languages only differ in their grammar.
//                         </p>
//                       </div>
//                     </div>
//                   </div>
//                 </a>

//                 <a
                 
//                   className="text-reset notification-item"
//                 >
//                   <div className="d-flex align-items-start">
//                     <div className="position-relative me-2">
//                       <span className="user-status online"></span>
//                       <img
//                         src="/assets/images/users/avatar-5.jpg"
//                         className="rounded-circle avatar-sm"
//                         alt="user-pic"
//                       />
//                     </div>
//                     <div className="flex-1 overflow-hidden">
//                       <h6 className="mt-0 mb-1 font-14">Ryan Salting</h6>
//                       <div className="font-13 text-muted">
//                         <p className="mb-0 text-truncate">
//                           If several languages coalesce the grammar of the
//                           resulting.
//                         </p>
//                       </div>
//                     </div>
//                   </div>
//                 </a>

//                 <a
                 
//                   className="text-reset notification-item"
//                 >
//                   <div className="d-flex align-items-start">
//                     <div className="position-relative me-2">
//                       <span className="user-status online"></span>
//                       <img
//                         src="/assets/images/users/avatar-6.jpg"
//                         className="rounded-circle avatar-sm"
//                         alt="user-pic"
//                       />
//                     </div>
//                     <div className="flex-1 overflow-hidden">
//                       <h6 className="mt-0 mb-1 font-14">Sean Howse</h6>
//                       <div className="font-13 text-muted">
//                         <p className="mb-0 text-truncate">
//                           It will seem like simplified English.
//                         </p>
//                       </div>
//                     </div>
//                   </div>
//                 </a>

//                 <a
                 
//                   className="text-reset notification-item"
//                 >
//                   <div className="d-flex align-items-start">
//                     <div className="position-relative me-2">
//                       <span className="user-status busy"></span>
//                       <img
//                         src="/assets/images/users/avatar-7.jpg"
//                         className="rounded-circle avatar-sm"
//                         alt="user-pic"
//                       />
//                     </div>
//                     <div className="flex-1 overflow-hidden">
//                       <h6 className="mt-0 mb-1 font-14">Dean Coward</h6>
//                       <div className="font-13 text-muted">
//                         <p className="mb-0 text-truncate">
//                           The new common language will be more simple.
//                         </p>
//                       </div>
//                     </div>
//                   </div>
//                 </a>

//                 <a
                 
//                   className="text-reset notification-item"
//                 >
//                   <div className="d-flex align-items-start">
//                     <div className="position-relative me-2">
//                       <span className="user-status away"></span>
//                       <img
//                         src="/assets/images/users/avatar-8.jpg"
//                         className="rounded-circle avatar-sm"
//                         alt="user-pic"
//                       />
//                     </div>
//                     <div className="flex-1 overflow-hidden">
//                       <h6 className="mt-0 mb-1 font-14">Hayley East</h6>
//                       <div className="font-13 text-muted">
//                         <p className="mb-0 text-truncate">
//                           One could refuse to pay expensive translators.
//                         </p>
//                       </div>
//                     </div>
//                   </div>
//                 </a>

//                 <div className="text-center mt-3">
//                   <a href=";" className="btn btn-sm btn-white">
//                     <i className="mdi mdi-spin mdi-loading me-2"></i>
//                     Load more
//                   </a>
//                 </div>
//               </div>
//             </div>

//             <div className="tab-pane" id="tasks-tab" role="tabpanel">
//               <h6 className="fw-medium p-3 m-0 text-uppercase">Working Tasks</h6>
//               <div className="px-2">
//                 <a
                 
//                   className="text-reset item-hovered d-block p-2"
//                 >
//                   <p className="text-muted mb-0">
//                     App Development<span className="float-end">75%</span>
//                   </p>
//                   <div className="progress mt-2" style={{height: '4px'}}>
//                     <div
//                       className="progress-bar bg-success"
//                       role="progressbar"
//                       style={{width:'75%'}}
//                       aria-valuenow="75"
//                       aria-valuemin="0"
//                       aria-valuemax="100"
//                     ></div>
//                   </div>
//                 </a>

//                 <a
                 
//                   className="text-reset item-hovered d-block p-2"
//                 >
//                   <p className="text-muted mb-0">
//                     Database Repair<span className="float-end">37%</span>
//                   </p>
//                   <div className="progress mt-2" style={{height: '4px'}}>
//                     <div
//                       className="progress-bar bg-info"
//                       role="progressbar"
//                       style={{width: '37%'}}
//                       aria-valuenow="37"
//                       aria-valuemin="0"
//                       aria-valuemax="100"
//                     ></div>
//                   </div>
//                 </a>

//                 <a
                 
//                   className="text-reset item-hovered d-block p-2"
//                 >
//                   <p className="text-muted mb-0">
//                     Backup Create<span className="float-end">52%</span>
//                   </p>
//                   <div className="progress mt-2" style={{height: '4px'}}>
//                     <div
//                       className="progress-bar bg-warning"
//                       role="progressbar"
//                       style={{width: '52%'}}
//                       aria-valuenow="52"
//                       aria-valuemin="0"
//                       aria-valuemax="100"
//                     ></div>
//                   </div>
//                 </a>
//               </div>

//               <h6 className="fw-medium px-3 mb-0 mt-4 text-uppercase">
//                 Upcoming Tasks
//               </h6>

//               <div className="p-2">
//                 <a
                 
//                   className="text-reset item-hovered d-block p-2"
//                 >
//                   <p className="text-muted mb-0">
//                     Sales Reporting<span className="float-end">12%</span>
//                   </p>
//                   <div className="progress mt-2" style={{height: '4px'}}>
//                     <div
//                       className="progress-bar bg-danger"
//                       role="progressbar"
//                       style={{width: '12%'}}
//                       aria-valuenow="12"
//                       aria-valuemin="0"
//                       aria-valuemax="100"
//                     ></div>
//                   </div>
//                 </a>

//                 <a
                 
//                   className="text-reset item-hovered d-block p-2"
//                 >
//                   <p className="text-muted mb-0">
//                     Redesign Website<span className="float-end">67%</span>
//                   </p>
//                   <div className="progress mt-2" style={{height: '4px'}}>
//                     <div
//                       className="progress-bar bg-primary"
//                       role="progressbar"
//                       style={{width: '67%'}}
//                       aria-valuenow="67"
//                       aria-valuemin="0"
//                       aria-valuemax="100"
//                     ></div>
//                   </div>
//                 </a>

//                 <a
                 
//                   className="text-reset item-hovered d-block p-2"
//                 >
//                   <p className="text-muted mb-0">
//                     New Admin Design<span className="float-end">84%</span>
//                   </p>
//                   <div className="progress mt-2" style={{height: '4px'}}>
//                     <div
//                       className="progress-bar bg-success"
//                       role="progressbar"
//                       style={{width: '84%'}}
//                       aria-valuenow="84"
//                       aria-valuemin="0"
//                       aria-valuemax="100"
//                     ></div>
//                   </div>
//                 </a>
//               </div>

//               <div className="d-grid p-3 mt-2">
//                 <a
                 
//                   className="btn btn-success waves-effect waves-light"
//                 >
//                   Create Task
//                 </a>
//               </div>
//             </div>
//             <div className="tab-pane active" id="settings-tab" role="tabpanel">
//               <h6 className="fw-medium px-3 m-0 py-2 font-13 text-uppercase bg-light">
//                 <span className="d-block py-1">Theme Settings</span>
//               </h6>

//               <div className="p-3">
//                 <div className="alert alert-warning" role="alert">
//                   <strong>Customize </strong> the overall color scheme, sidebar
//                   menu, etc.
//                 </div>
//                 <h6 className="fw-medium font-14 mt-4 mb-2 pb-1">Color Scheme</h6>
//                 <div className="form-check form-switch mb-1">
//                   <input
//                     className="form-check-input"
//                     type="checkbox"
//                     name="color-scheme-mode"
//                     value="light"
//                     id="light-mode-check"
//                     checked
//                   />
//                   <label className="form-check-label" for="light-mode-check">
//                     Light Mode
//                   </label>
//                 </div>
//                 <div className="form-check form-switch mb-1">
//                   <input
//                     className="form-check-input"
//                     type="checkbox"
//                     name="color-scheme-mode"
//                     value="dark"
//                     id="dark-mode-check"
//                   />
//                   <label className="form-check-label" for="dark-mode-check">
//                     Dark Mode
//                   </label>
//                 </div>
//                 <h6 className="fw-medium font-14 mt-4 mb-2 pb-1">Width</h6>
//                 <div className="form-check form-switch mb-1">
//                   <input
//                     className="form-check-input"
//                     type="checkbox"
//                     name="width"
//                     value="fluid"
//                     id="fluid-check"
//                     checked
//                   />
//                   <label className="form-check-label" for="fluid-check">
//                     Fluid
//                   </label>
//                 </div>
//                 <div className="form-check form-switch mb-1">
//                   <input
//                     className="form-check-input"
//                     type="checkbox"
//                     name="width"
//                     value="boxed"
//                     id="boxed-check"
//                   />
//                   <label className="form-check-label" for="boxed-check">
//                     Boxed
//                   </label>
//                 </div>
//                 <h6 className="fw-medium font-14 mt-4 mb-2 pb-1">Topbar</h6>
//                 <div className="form-check form-switch mb-1">
//                   <input
//                     className="form-check-input"
//                     type="checkbox"
//                     name="topbar-color"
//                     value="dark"
//                     id="darktopbar-check"
//                     checked
//                   />
//                   <label className="form-check-label" for="darktopbar-check">
//                     Dark
//                   </label>
//                 </div>
//                 <div className="form-check form-switch mb-1">
//                   <input
//                     className="form-check-input"
//                     type="checkbox"
//                     name="topbar-color"
//                     value="light"
//                     id="lighttopbar-check"
//                   />
//                   <label className="form-check-label" for="lighttopbar-check">
//                     Light
//                   </label>
//                 </div>
//                 /
//                 <h6 className="fw-medium font-14 mt-4 mb-2 pb-1">
//                   Menus Positon <small>(Leftsidebar and Topbar)</small>
//                 </h6>
//                 <div className="form-check form-switch mb-1">
//                   <input
//                     className="form-check-input"
//                     type="checkbox"
//                     name="menus-position"
//                     value="fixed"
//                     id="fixed-check"
//                     checked
//                   />
//                   <label className="form-check-label" for="fixed-check">
//                     Fixed
//                   </label>
//                 </div>
//                 <div className="form-check form-switch mb-1">
//                   <input
//                     className="form-check-input"
//                     type="checkbox"
//                     name="menus-position"
//                     value="scrollable"
//                     id="scrollable-check"
//                   />
//                   <label className="form-check-label" for="scrollable-check">
//                     Scrollable
//                   </label>
//                 </div>
//                 /
//                 <h6 className="fw-medium font-14 mt-4 mb-2 pb-1">
//                   Left Sidebar Color
//                 </h6>
//                 <div className="form-check form-switch mb-1">
//                   <input
//                     className="form-check-input"
//                     type="checkbox"
//                     name="leftsidebar-color"
//                     value="light"
//                     id="light-check"
//                     checked
//                   />
//                   <label className="form-check-label" for="light-check">
//                     Light
//                   </label>
//                 </div>
//                 <div className="form-check form-switch mb-1">
//                   <input
//                     className="form-check-input"
//                     type="checkbox"
//                     name="leftsidebar-color"
//                     value="dark"
//                     id="dark-check"
//                   />
//                   <label className="form-check-label" for="dark-check">
//                     Dark
//                   </label>
//                 </div>
//                 <div className="form-check form-switch mb-1">
//                   <input
//                     className="form-check-input"
//                     type="checkbox"
//                     name="leftsidebar-color"
//                     value="brand"
//                     id="brand-check"
//                   />
//                   <label className="form-check-label" for="brand-check">
//                     Brand
//                   </label>
//                 </div>
//                 <div className="form-check form-switch mb-1">
//                   <input
//                     className="form-check-input"
//                     type="checkbox"
//                     name="leftsidebar-color"
//                     value="gradient"
//                     id="gradient-check"
//                   />
//                   <label className="form-check-label" for="gradient-check">
//                     Gradient
//                   </label>
//                 </div>
//                 <h6 className="fw-medium font-14 mt-4 mb-2 pb-1">
//                   Left Sidebar Size
//                 </h6>
//                 <div className="form-check form-switch mb-1">
//                   <input
//                     className="form-check-input"
//                     type="checkbox"
//                     name="leftsidebar-size"
//                     value="default"
//                     id="default-size-check"
//                     checked
//                   />
//                   <label className="form-check-label" for="default-size-check">
//                     Default
//                   </label>
//                 </div>
//                 <div className="form-check form-switch mb-1">
//                   <input
//                     className="form-check-input"
//                     type="checkbox"
//                     name="leftsidebar-size"
//                     value="condensed"
//                     id="condensed-check"
//                   />
//                   <label className="form-check-label" for="condensed-check">
//                     Condensed <small>(Extra Small size)</small>
//                   </label>
//                 </div>
//                 <div className="form-check form-switch mb-1">
//                   <input
//                     className="form-check-input"
//                     type="checkbox"
//                     name="leftsidebar-size"
//                     value="compact"
//                     id="compact-check"
//                   />
//                   <label className="form-check-label" for="compact-check">
//                     Compact <small>(Small size)</small>
//                   </label>
//                 </div>
//                 <h6 className="fw-medium font-14 mt-4 mb-2 pb-1">
//                   Sidebar User Info
//                 </h6>
//                 <div className="form-check form-switch mb-1">
//                   <input
//                     className="form-check-input"
//                     type="checkbox"
//                     name="leftsidebar-user"
//                     value="fixed"
//                     id="sidebaruser-check"
//                   />
//                   <label className="form-check-label" for="sidebaruser-check">
//                     Enable
//                   </label>
//                 </div>
//                 <div className="d-grid mt-4">
//                   <button className="btn btn-primary" id="resetBtn">
//                     Reset to Default
//                   </button>

//                   <a
//                     href="https://wrapbootstrap.com/theme/minton-admin-dashboard-landing-template-WB0858DB6?ref=coderthemes"
//                     className="btn btn-danger mt-2"
//                     target="_blank"
//                   >
//                     <i className="mdi mdi-basket me-1"></i> Purchase Now
//                   </a>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//      );
// }
 
// export default RightBar;