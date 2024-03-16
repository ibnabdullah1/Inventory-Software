import React from "react";

const AddProducts = () => {
  return (
    <div class="content">
      <div class="page-header">
        <div class="page-title">
          <h4>Product Add</h4>
          <h6>Create new product</h6>
        </div>
      </div>

      <div class="card">
        <div class="card-body">
          <div class="sm:grid sm:grid-cols-2 lg:grid-cols-4 gap-x-6">
            <div>
              <div class="form-group">
                <label>Product Name</label>
                <input type="text" />
              </div>
            </div>
            <div>
              <div class="form-group">
                <label>Category</label>
                <select
                  class="select select2-hidden-accessible"
                  data-select2-id="1"
                  tabindex="-1"
                  aria-hidden="true"
                >
                  <option data-select2-id="3">Choose Category</option>
                  <option>Computers</option>
                </select>
                <span
                  class="select2 select2-container select2-container--default"
                  dir="ltr"
                  data-select2-id="2"
                >
                  <span class="selection">
                    <span
                      class="select2-selection select2-selection--single"
                      role="combobox"
                      aria-haspopup="true"
                      aria-expanded="false"
                      tabindex="0"
                      aria-disabled="false"
                      aria-labelledby="select2-hjqv-container"
                    >
                      <span
                        class="select2-selection__rendered"
                        id="select2-hjqv-container"
                        role="textbox"
                        aria-readonly="true"
                        title="Choose Category"
                      >
                        Choose Category
                      </span>
                      <span
                        class="select2-selection__arrow"
                        role="presentation"
                      >
                        <b role="presentation"></b>
                      </span>
                    </span>
                  </span>
                  <span class="dropdown-wrapper" aria-hidden="true"></span>
                </span>
              </div>
            </div>
            <div>
              <div class="form-group">
                <label>Sub Category</label>
                <select
                  class="select select2-hidden-accessible"
                  data-select2-id="4"
                  tabindex="-1"
                  aria-hidden="true"
                >
                  <option data-select2-id="6">Choose Sub Category</option>
                  <option>Fruits</option>
                </select>
                <span
                  class="select2 select2-container select2-container--default"
                  dir="ltr"
                  data-select2-id="5"
                >
                  <span class="selection">
                    <span
                      class="select2-selection select2-selection--single"
                      role="combobox"
                      aria-haspopup="true"
                      aria-expanded="false"
                      tabindex="0"
                      aria-disabled="false"
                      aria-labelledby="select2-0ed4-container"
                    >
                      <span
                        class="select2-selection__rendered"
                        id="select2-0ed4-container"
                        role="textbox"
                        aria-readonly="true"
                        title="Choose Sub Category"
                      >
                        Choose Sub Category
                      </span>
                      <span
                        class="select2-selection__arrow"
                        role="presentation"
                      >
                        <b role="presentation"></b>
                      </span>
                    </span>
                  </span>
                  <span class="dropdown-wrapper" aria-hidden="true"></span>
                </span>
              </div>
            </div>
            <div>
              <div class="form-group">
                <label>Brand</label>
                <select
                  class="select select2-hidden-accessible"
                  data-select2-id="7"
                  tabindex="-1"
                  aria-hidden="true"
                >
                  <option data-select2-id="9">Choose Brand</option>
                  <option>Brand</option>
                </select>
                <span
                  class="select2 select2-container select2-container--default"
                  dir="ltr"
                  data-select2-id="8"
                >
                  <span class="selection">
                    <span
                      class="select2-selection select2-selection--single"
                      role="combobox"
                      aria-haspopup="true"
                      aria-expanded="false"
                      tabindex="0"
                      aria-disabled="false"
                      aria-labelledby="select2-zvsk-container"
                    >
                      <span
                        class="select2-selection__rendered"
                        id="select2-zvsk-container"
                        role="textbox"
                        aria-readonly="true"
                        title="Choose Brand"
                      >
                        Choose Brand
                      </span>
                      <span
                        class="select2-selection__arrow"
                        role="presentation"
                      >
                        <b role="presentation"></b>
                      </span>
                    </span>
                  </span>
                  <span class="dropdown-wrapper" aria-hidden="true"></span>
                </span>
              </div>
            </div>
            <div>
              <div class="form-group">
                <label>Unit</label>
                <select
                  class="select select2-hidden-accessible"
                  data-select2-id="10"
                  tabindex="-1"
                  aria-hidden="true"
                >
                  <option data-select2-id="12">Choose Unit</option>
                  <option>Unit</option>
                </select>
                <span
                  class="select2 select2-container select2-container--default"
                  dir="ltr"
                  data-select2-id="11"
                >
                  <span class="selection">
                    <span
                      class="select2-selection select2-selection--single"
                      role="combobox"
                      aria-haspopup="true"
                      aria-expanded="false"
                      tabindex="0"
                      aria-disabled="false"
                      aria-labelledby="select2-2ebp-container"
                    >
                      <span
                        class="select2-selection__rendered"
                        id="select2-2ebp-container"
                        role="textbox"
                        aria-readonly="true"
                        title="Choose Unit"
                      >
                        Choose Unit
                      </span>
                      <span
                        class="select2-selection__arrow"
                        role="presentation"
                      >
                        <b role="presentation"></b>
                      </span>
                    </span>
                  </span>
                  <span class="dropdown-wrapper" aria-hidden="true"></span>
                </span>
              </div>
            </div>
            <div>
              <div class="form-group">
                <label>SKU</label>
                <input type="text" />
              </div>
            </div>
            <div>
              <div class="form-group">
                <label>Minimum Qty</label>
                <input type="text" />
              </div>
            </div>
            <div>
              <div class="form-group">
                <label>Quantity</label>
                <input type="text" />
              </div>
            </div>
            <div class="sm:col-span-2 lg:col-span-4">
              <div class="form-group">
                <label>Description</label>
                <textarea class="form-control"></textarea>
              </div>
            </div>
            <div>
              <div class="form-group">
                <label>Tax</label>
                <select
                  class="select select2-hidden-accessible"
                  data-select2-id="13"
                  tabindex="-1"
                  aria-hidden="true"
                >
                  <option data-select2-id="15">Choose Tax</option>
                  <option>2%</option>
                </select>
                <span
                  class="select2 select2-container select2-container--default"
                  dir="ltr"
                  data-select2-id="14"
                >
                  <span class="selection">
                    <span
                      class="select2-selection select2-selection--single"
                      role="combobox"
                      aria-haspopup="true"
                      aria-expanded="false"
                      tabindex="0"
                      aria-disabled="false"
                      aria-labelledby="select2-tmir-container"
                    >
                      <span
                        class="select2-selection__rendered"
                        id="select2-tmir-container"
                        role="textbox"
                        aria-readonly="true"
                        title="Choose Tax"
                      >
                        Choose Tax
                      </span>
                      <span
                        class="select2-selection__arrow"
                        role="presentation"
                      >
                        <b role="presentation"></b>
                      </span>
                    </span>
                  </span>
                  <span class="dropdown-wrapper" aria-hidden="true"></span>
                </span>
              </div>
            </div>
            <div>
              <div class="form-group">
                <label>Discount Type</label>
                <select
                  class="select select2-hidden-accessible"
                  data-select2-id="16"
                  tabindex="-1"
                  aria-hidden="true"
                >
                  <option data-select2-id="18">Percentage</option>
                  <option>10%</option>
                  <option>20%</option>
                </select>
                <span
                  class="select2 select2-container select2-container--default"
                  dir="ltr"
                  data-select2-id="17"
                >
                  <span class="selection">
                    <span
                      class="select2-selection select2-selection--single"
                      role="combobox"
                      aria-haspopup="true"
                      aria-expanded="false"
                      tabindex="0"
                      aria-disabled="false"
                      aria-labelledby="select2-4yr0-container"
                    >
                      <span
                        class="select2-selection__rendered"
                        id="select2-4yr0-container"
                        role="textbox"
                        aria-readonly="true"
                        title="Percentage"
                      >
                        Percentage
                      </span>
                      <span
                        class="select2-selection__arrow"
                        role="presentation"
                      >
                        <b role="presentation"></b>
                      </span>
                    </span>
                  </span>
                  <span class="dropdown-wrapper" aria-hidden="true"></span>
                </span>
              </div>
            </div>
            <div>
              <div class="form-group">
                <label>Price</label>
                <input type="text" />
              </div>
            </div>
            <div>
              <div class="form-group">
                <label> Status</label>
                <select
                  class="select select2-hidden-accessible"
                  data-select2-id="19"
                  tabindex="-1"
                  aria-hidden="true"
                >
                  <option data-select2-id="21">Closed</option>
                  <option>Open</option>
                </select>
                <span
                  class="select2 select2-container select2-container--default"
                  dir="ltr"
                  data-select2-id="20"
                >
                  <span class="selection">
                    <span
                      class="select2-selection select2-selection--single"
                      role="combobox"
                      aria-haspopup="true"
                      aria-expanded="false"
                      tabindex="0"
                      aria-disabled="false"
                      aria-labelledby="select2-rgz0-container"
                    >
                      <span
                        class="select2-selection__rendered"
                        id="select2-rgz0-container"
                        role="textbox"
                        aria-readonly="true"
                        title="Closed"
                      >
                        Closed
                      </span>
                      <span
                        class="select2-selection__arrow"
                        role="presentation"
                      >
                        <b role="presentation"></b>
                      </span>
                    </span>
                  </span>
                  <span class="dropdown-wrapper" aria-hidden="true"></span>
                </span>
              </div>
            </div>
            <div class="sm:col-span-2 lg:col-span-4">
              <div class="form-group">
                <label> Product Image</label>
                <div class="image-upload">
                  <input type="file" />
                  <div class="image-uploads">
                    <h4>Drag and drop a file to upload</h4>
                  </div>
                </div>
              </div>
            </div>
            <div class="col-span-2">
              <a href="javascript:void(0);" class="btn btn-submit mr-2">
                Submit
              </a>
              <a href="=" class="btn btn-cancel">
                Cancel
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddProducts;
