<template>
  <div class="mt-2">
    <div class="text-sm breadcrumbs mx-auto">
      <ul>
        <li>Dashboard</li>
        <li><router-link to="/shopee">Go to Home</router-link></li>
      </ul>
    </div>

    <div class="grid grid-cols-1 md:grid-cols-4 gap-4 mt-4">
      <div class="card card-compac bg-info shadow-md text-info-content">
        <div class="card-body">
          <h2 class="card-title">Shoes!</h2>
          <p>If a dog chews shoes whose shoes does he choose?</p>
        </div>
      </div>

      <div class="card card-compac bg-success shadow-md text-success-content">
        <div class="card-body">
          <h2 class="card-title">Shoes!</h2>
          <p>If a dog chews shoes whose shoes does he choose?</p>
        </div>
      </div>

      <div class="card card-compac bg-warning shadow-md text-warning-content">
        <div class="card-body">
          <h2 class="card-title">Shoes!</h2>
          <p>If a dog chews shoes whose shoes does he choose?</p>
        </div>
      </div>

      <div class="card card-compac bg-error shadow-md text-error-content">
        <div class="card-body">
          <h2 class="card-title">Shoes!</h2>
          <p>If a dog chews shoes whose shoes does he choose?</p>
        </div>
      </div>
    </div>

    <div class="divider"></div>

    <div class="card card-compac bg-base-200 shadow-md">
      <div class="card-body">
        <h2 class="card-title">
          <p>Accounts</p>
          <div class="card-actions justify-end">
          <button class="btn gap-2">
            Add
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
              <path stroke-linecap="round" stroke-linejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
            </svg>
            </button>
        </div>
        </h2>
        
        <div class="overflow-x-auto w-full">
          <table class="table w-full">
            <!-- head -->
            <thead>
              <tr>
                <th></th>
                <th>Name</th>
                <th>Job</th>
                <th>Favorite Color</th>
              </tr>
            </thead>
            <tbody>
              <!-- row 1 -->
              <tr>
                <th>1</th>
                <td>Cy Ganderton</td>
                <td>Quality Control Specialist</td>
                <td>Blue</td>
              </tr>
              <!-- row 2 -->
              <tr class="hover">
                <th>2</th>
                <td>Hart Hagerty</td>
                <td>Desktop Support Technician</td>
                <td>Purple</td>
              </tr>
              <!-- row 3 -->
              <tr>
                <th>3</th>
                <td>Brice Swyre</td>
                <td>Tax Accountant</td>
                <td>Red</td>
              </tr>
            </tbody>
          </table>
        </div>

        
      </div>
    </div>

    <div class="divider"></div>

    <div class="card card-compac bg-base-200 shadow-md">
      <div class="card-body">
        <h2 class="card-title">Farm</h2>
        
        <div class="overflow-x-auto w-full">
          <table class="table w-full">
            <!-- head -->
            <thead>
              <tr>
                <th></th>
                <th>Name</th>
                <th>Job</th>
                <th>Favorite Color</th>
              </tr>
            </thead>
            <tbody>
              <!-- row 1 -->
              <tr>
                <th>1</th>
                <td>Cy Ganderton</td>
                <td>Quality Control Specialist</td>
                <td>Blue</td>
              </tr>
              <!-- row 2 -->
              <tr class="hover">
                <th>2</th>
                <td>Hart Hagerty</td>
                <td>Desktop Support Technician</td>
                <td>Purple</td>
              </tr>
              <!-- row 3 -->
              <tr>
                <th>3</th>
                <td>Brice Swyre</td>
                <td>Tax Accountant</td>
                <td>Red</td>
              </tr>
            </tbody>
          </table>
        </div>

        
      </div>
    </div>
  </div>
</template>