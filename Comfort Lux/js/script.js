const employeesGrid = document.getElementById('card');
let employees = [];

const loadEmployees = async () => {
    try {
        const res = await fetch('https://valentinajurievna.github.io/ComfortLux/Comfort%20Lux/json/data.json');
        employees = await res.json();
        displayEmployeesGrid(employees);
    } catch (err) {
        console.error(err);
    }
};

const displayEmployeesGrid = (employees) => {
		const htmlString = employees
        .map((employee) => {
            return `
            <div class="fabric-card p-4 flex-row d-flex col-lg-6 col-md-12 mt-md-5 mt-lg-0 mr-3 mb-3 wow animate__animated animate__fadeInUp" data-wow-delay="${employee.animation}s">
            <div class="fabric-card__photos flex-column d-flex">
                <div class="fabric-card__photo">
                    <div class="d-flex justify-content-end">
                        <div class="fabric-card__name-of-fabric align-self-end">
                            <h3 class="d-flex justify-content-center align-items-center mt-3" id="fabric-name-card-${employee.id}">${employee.fabric.one[1]}</h3>
                        </div>
                        <img src="${employee.fabric.one[0]}" class="fabric-card__big-photo img-fluid" id="fabric-card__big-photo-card-${employee.id}">
                    </div>
                    <div class="hover-effect" id="hover-effect-${employee.id}" onclick="openPhoto('fabric-card__big-photo-card-${employee.id}', 'hover-effect-${employee.id}')"  >
                        <a href="#"><img src="../img/icons/visibility.svg" class="img-fluid" alt=""></a>
                    </div>
                </div>
                <div id="carousel-card-${employee.id}" class="carousel slide mt-4" data-ride="carousel" data-interval="false" data-touch="true">
                      <div class="carousel-inner align-items-center">
                        <div class="carousel-item active">
                              <div class="flex-row d-flex justify-content-center">
                                    <div class="fabric-card__little-photo" onclick="replaceImg('fabric-card__big-photo-card-${employee.id}','${employee.fabric.two[0]}', 'fabric-name-card-${employee.id}', '${employee.fabric.two[1]}')">
                                          <img src="${employee.fabric.two[0]}" class="img-fluid">
                                    </div>
                                    <div class="fabric-card__little-photo ml-1" onclick="replaceImg('fabric-card__big-photo-card-${employee.id}', '${employee.fabric.three[0]}', 'fabric-name-card-${employee.id}', '${employee.fabric.three[1]}')">
                                         <img src="${employee.fabric.three[0]}" class="img-fluid">
                                    </div>
                                    <div class="fabric-card__little-photo ml-1" onclick="replaceImg('fabric-card__big-photo-card-${employee.id}','${employee.fabric.four[0]}', 'fabric-name-card-${employee.id}', '${employee.fabric.four[1]}')">
                                         <img src="${employee.fabric.four[0]}" class="img-fluid">
                                    </div>
                                  </div>
                        </div>
                        <div class="carousel-item">
                              <div class="flex-row d-flex justify-content-center">
                                <div class="fabric-card__little-photo" onclick="replaceImg('fabric-card__big-photo-card-${employee.id}','${employee.fabric.five[0]}','fabric-name-card-${employee.id}', '${employee.fabric.five[1]}')">
                                      <img src="${employee.fabric.five[0]}" class="img-fluid">
                                </div>
                                <div class="fabric-card__little-photo ml-1" onclick="replaceImg('fabric-card__big-photo-card-${employee.id}', '${employee.fabric.six[0]}','fabric-name-card-${employee.id}', '${employee.fabric.six[1]}')">
                                     <img src="${employee.fabric.six[0]}" class="img-fluid">
                                </div>	
                                <div class="fabric-card__little-photo ml-1" onclick="replaceImg('fabric-card__big-photo-card-${employee.id}', '${employee.fabric.seven[0]}','fabric-name-card-${employee.id}', '${employee.fabric.seven[1]}')">
                                     <img src="${employee.fabric.seven[0]}" class="img-fluid">
                                </div>
                              </div>
                        </div>
                        <div class="carousel-item">
                              <div class="flex-row d-flex justify-content-center">
                                <div class="fabric-card__little-photo" onclick="replaceImg('fabric-card__big-photo-card-${employee.id}','${employee.fabric.eight[0]}','fabric-name-card-${employee.id}', '${employee.fabric.eight[1]}')">
                                      <img src="${employee.fabric.eight[0]}" class="img-fluid">
                                </div>
                                <div class="fabric-card__little-photo ml-1" onclick="replaceImg('fabric-card__big-photo-card-${employee.id}', '${employee.fabric.nine[0]}','fabric-name-card-${employee.id}', '${employee.fabric.nine[1]}')">
                                     <img src="${employee.fabric.nine[0]}" class="img-fluid">
                                </div>	
                                <div class="fabric-card__little-photo ml-1" onclick="replaceImg('fabric-card__big-photo-card-${employee.id}', '${employee.fabric.ten[0]}','fabric-name-card-${employee.id}', '${employee.fabric.ten[1]}')">
                                     <img src="${employee.fabric.ten[0]}" class="img-fluid">
                                </div>
                              </div>
                        </div>
                        <div class="carousel-item">
                              <div class="flex-row d-flex justify-content-center">
                                <div class="fabric-card__little-photo" onclick="replaceImg('fabric-card__big-photo-card-${employee.id}','${employee.fabric.eleven[0]}','fabric-name-card-${employee.id}', '${employee.fabric.eleven[1]}')">
                                      <img src="${employee.fabric.eleven[0]}" class="img-fluid">
                                </div>
                                <div class="fabric-card__little-photo ml-1" onclick="replaceImg('fabric-card__big-photo-card-${employee.id}', '${employee.fabric.twelve[0]}','fabric-name-card-${employee.id}', '${employee.fabric.twelve[1]}')">
                                     <img src="${employee.fabric.twelve[0]}" class="img-fluid">
                                </div>	
                                <div class="fabric-card__little-photo ml-1" onclick="replaceImg('fabric-card__big-photo-card-${employee.id}', '${employee.fabric.thirteen[0]}','fabric-name-card-${employee.id}', '${employee.fabric.thirteen[1]}')">
                                     <img src="${employee.fabric.thirteen[0]}" class="img-fluid">
                                </div>
                              </div>
                        </div>
                        <div class="carousel-item">
                              <div class="flex-row d-flex justify-content-center">
                                <div class="fabric-card__little-photo" onclick="replaceImg('fabric-card__big-photo-card-${employee.id}','${employee.fabric.fourteen[0]}','fabric-name-card-${employee.id}', '${employee.fabric.fourteen[1]}')">
                                      <img src="${employee.fabric.fourteen[0]}" class="img-fluid">
                                </div>
                                <div class="fabric-card__little-photo ml-1" onclick="replaceImg('fabric-card__big-photo-card-${employee.id}', '${employee.fabric.fifteen[0]}','fabric-name-card-${employee.id}', '${employee.fabric.fifteen[1]}')">
                                     <img src="${employee.fabric.fifteen[0]}" class="img-fluid">
                                </div>	
                                <div class="fabric-card__little-photo ml-1" onclick="replaceImg('fabric-card__big-photo-card-${employee.id}', '${employee.fabric.sixteen[0]}','fabric-name-card-${employee.id}', '${employee.fabric.sixteen[1]}')">
                                     <img src="${employee.fabric.sixteen[0]}" class="img-fluid">
                                </div>
                              </div>
                        </div>
                        <div class="carousel-item">
                              <div class="flex-row d-flex justify-content-center">
                                <div class="fabric-card__little-photo" onclick="replaceImg('fabric-card__big-photo-card-${employee.id}','${employee.fabric.seventeen[0]}','fabric-name-card-${employee.id}', '${employee.fabric.seventeen[1]}')">
                                      <img src="${employee.fabric.seventeen[0]}" class="img-fluid">
                                </div>
                                <div class="fabric-card__little-photo ml-1" onclick="replaceImg('fabric-card__big-photo-card-${employee.id}', '${employee.fabric.eighteen[0]}','fabric-name-card-${employee.id}', '${employee.fabric.eighteen[1]}')">
                                     <img src="${employee.fabric.eighteen[0]}" class="img-fluid">
                                </div>	
                                <div class="fabric-card__little-photo ml-1" onclick="replaceImg('fabric-card__big-photo-card-${employee.id}', '${employee.fabric.nineteen[0]}','fabric-name-card-${employee.id}', '${employee.fabric.nineteen[1]}')">
                                     <img src="${employee.fabric.nineteen[0]}" class="img-fluid">
                                </div>
                              </div>
                        </div>
                        <div class="carousel-item">
                            <div class="flex-row d-flex justify-content-center">
                            <div class="fabric-card__little-photo" onclick="replaceImg('fabric-card__big-photo-card-${employee.id}','${employee.fabric.twenty[0]}','fabric-name-card-${employee.id}', '${employee.fabric.twenty[1]}')">
                                    <img src="${employee.fabric.twenty[0]}" class="img-fluid">
                            </div>
                            <div class="fabric-card__little-photo ml-1" onclick="replaceImg('fabric-card__big-photo-card-${employee.id}', '${employee.fabric.twentyOne[0]}','fabric-name-card-${employee.id}', '${employee.fabric.twentyOne[1]}')">
                                <img src="${employee.fabric.twentyOne[0]}" class="img-fluid">
                            </div>	
                            <div class="fabric-card__little-photo ml-1" onclick="replaceImg('fabric-card__big-photo-card-${employee.id}', '${employee.fabric.twentyTwo[0]}','fabric-name-card-${employee.id}', '${employee.fabric.twentyTwo[1]}')">
                                <img src="${employee.fabric.twentyTwo[0]}" class="img-fluid">
                            </div>
                            </div>
                        </div>
                        <div class="carousel-item">
                            <div class="flex-row d-flex justify-content-center">
                            <div class="fabric-card__little-photo" onclick="replaceImg('fabric-card__big-photo-card-${employee.id}','${employee.fabric.twentyThree[0]}','fabric-name-card-${employee.id}', '${employee.fabric.twentyThree[1]}')">
                                    <img src="${employee.fabric.twentyThree[0]}" class="img-fluid">
                            </div>
                            <div class="fabric-card__little-photo ml-1" onclick="replaceImg('fabric-card__big-photo-card-${employee.id}', '${employee.fabric.twentyFour[0]}','fabric-name-card-${employee.id}', '${employee.fabric.twentyFour[1]}')">
                                <img src="${employee.fabric.twentyFour[0]}" class="img-fluid">
                            </div>	
                            <div class="fabric-card__little-photo ml-1" onclick="replaceImg('fabric-card__big-photo-card-${employee.id}', '${employee.fabric.twentyFive[0]}','fabric-name-card-${employee.id}', '${employee.fabric.twentyFive[1]}')">
                                <img src="${employee.fabric.twentyFive[0]}" class="img-fluid">
                            </div>
                            </div>
                        </div>
                      </div>
                      <a class="carousel-control-prev justify-content-start" href="#carousel-card-${employee.id}" role="button" data-slide="prev">
                        <img src="../img/icons/back.png">
                      </a>
                      <a class="carousel-control-next justify-content-end" href="#carousel-card-${employee.id}" role="button" data-slide="next">
                            <img src="../img/icons/next.png">
                      </a>
                </div>
            </div>

            <div class="fabric__content flex-column d-flex ml-5">
                    <h2 class="fabric__title mt-0">${employee.title}</h2>
                    <p class="fabric__description mt-1"><b>Состав:</b> ${employee.description.structure[0]}, <br>${employee.description.structure[1]}<br><b>Затемнение:</b> ${employee.description.darkening}</p>
                    <div class="system d-flex flex-row align-self-baseline mt-5">
                        <div class="d-flex align-items-baseline">
                            <h3 class="title-fabric">Установка:&ensp;</h3>
                            <a id="installation-${employee.id}" class="installation"> Mini</a>
                        </div>

                        <div class="dropdown p-0">
                            <div id="dropdownMenuSystem${employee.id}" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                <img src="../img/icons/bottom.svg" class="color-picker__arrow ml-2 mt-1" width="8" height="8">
                            </div>
                            <div class="system__dropdown dropdown-menu mt-0" aria-labelledby="dropdownMenuSystem${employee.id}">
                                <a class="dropdown-item" href="#!" id="system_uni" onclick="SelectSystem('number-${employee.id}', 'installation-${employee.id}', ${employee.cost.price[1]}, '${employee.cost.installation[1]}')"> Uni</a>
                                <a class="dropdown-item" href="#!" id="system_mgs" onclick="SelectSystem('number-${employee.id}', 'installation-${employee.id}', ${employee.cost.price[2]}, '${employee.cost.installation[2]}')"> Mgs</a>
                                <a class="dropdown-item" href="#!" id="system_mini" onclick="SelectSystem('number-${employee.id}', 'installation-${employee.id}', ${employee.cost.price[0]}, '${employee.cost.installation[0]}')"> Mini</a>
                              </div>
                        </div>
                    </div>
                    <div class="color-picker d-flex flex-row align-self-baseline mt-1">
                        <h3 class="title-fabric">Цвета: </h3>
                        <div class="color-picker__colors d-flex flex-row align-self-baseline">
                            <div class="color-picker__colors-color big" style="background-color: ${employee.fabric.eighteen[2]};" onclick="replaceImg('fabric-card__big-photo-card-${employee.id}','${employee.fabric.eighteen[0]}','fabric-name-card-${employee.id}', '${employee.fabric.eighteen[1]}')"></div>
                            <div class="color-picker__colors-color big" style="background-color: ${employee.fabric.two[2]};" onclick="replaceImg('fabric-card__big-photo-card-${employee.id}','${employee.fabric.two[0]}','fabric-name-card-${employee.id}', '${employee.fabric.two[1]}')"></div>
                            <div class="color-picker__colors-color big" style="background-color: ${employee.fabric.three[2]};" onclick="replaceImg('fabric-card__big-photo-card-${employee.id}','${employee.fabric.three[0]}','fabric-name-card-${employee.id}', '${employee.fabric.three[1]}')"></div>
                            <div class="color-picker__colors-color big" style="background-color: ${employee.fabric.four[2]};" onclick="replaceImg('fabric-card__big-photo-card-${employee.id}','${employee.fabric.four[0]}','fabric-name-card-${employee.id}', '${employee.fabric.four[1]}')"></div>
                        </div>

                        <div class="dropdown p-0">
                            <div id="dropdownMenu5" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                <img src="../img/icons/bottom.svg" class="color-picker__arrow ml-2" width="9" height="9">
                            </div>
                            <div class="color-picker__dropdown dropdown-menu mt-0" aria-labelledby="dropdownMenu5" >
                                <div class="d-flex flex-row">
                                    <a class="dropdown-item" href="#!"><div class="color-picker__colors-color big" style="background-color: ${employee.fabric.five[2]};" onclick="replaceImg('fabric-card__big-photo-card-${employee.id}','${employee.fabric.five[0]}','fabric-name-card-${employee.id}', '${employee.fabric.five[1]}')"></div></a>
                                    <a class="dropdown-item" href="#!"><div class="color-picker__colors-color big" style="background-color: ${employee.fabric.six[2]};" onclick="replaceImg('fabric-card__big-photo-card-${employee.id}','${employee.fabric.six[0]}','fabric-name-card-${employee.id}', '${employee.fabric.six[1]}')"></div></a>
                                    <a class="dropdown-item" href="#!"><div class="color-picker__colors-color big" style="background-color: ${employee.fabric.seven[2]};" onclick="replaceImg('fabric-card__big-photo-card-${employee.id}','${employee.fabric.seven[0]}','fabric-name-card-${employee.id}', '${employee.fabric.seven[1]}')"></div></a>
                                    <a class="dropdown-item" href="#!"><div class="color-picker__colors-color big" style="background-color: ${employee.fabric.eight[2]};" onclick="replaceImg('fabric-card__big-photo-card-${employee.id}','${employee.fabric.eight[0]}','fabric-name-card-${employee.id}', '${employee.fabric.eight[1]}')"></div></a>
                                    <a class="dropdown-item" href="#!"><div class="color-picker__colors-color big" style="background-color: ${employee.fabric.nine[2]};" onclick="replaceImg('fabric-card__big-photo-card-${employee.id}','${employee.fabric.nine[0]}','fabric-name-card-${employee.id}', '${employee.fabric.nine[1]}')"></div></a>
                                </div>
                                <div class="d-flex flex-row mt-1">
                                    <a class="dropdown-item" href="#!"><div class="color-picker__colors-color big" style="background-color: ${employee.fabric.ten[2]};" onclick="replaceImg('fabric-card__big-photo-card-${employee.id}','${employee.fabric.ten[0]}','fabric-name-card-${employee.id}', '${employee.fabric.ten[1]}')"></div></a>
                                    <a class="dropdown-item" href="#!"><div class="color-picker__colors-color big" style="background-color: ${employee.fabric.eleven[2]};" onclick="replaceImg('fabric-card__big-photo-card-${employee.id}','${employee.fabric.eleven[0]}','fabric-name-card-${employee.id}', '${employee.fabric.eleven[1]}')"></div></a>
                                    <a class="dropdown-item" href="#!"><div class="color-picker__colors-color big" style="background-color: ${employee.fabric.twelve[2]};" onclick="replaceImg('fabric-card__big-photo-card-${employee.id}','${employee.fabric.twelve[0]}','fabric-name-card-${employee.id}', '${employee.fabric.twelve[1]}')"></div></a>
                                    <a class="dropdown-item" href="#!"><div class="color-picker__colors-color big" style="background-color: ${employee.fabric.thirteen[2]};" onclick="replaceImg('fabric-card__big-photo-card-${employee.id}','${employee.fabric.thirteen[0]}','fabric-name-card-${employee.id}', '${employee.fabric.thirteen[1]}')"></div></a>
                                    <a class="dropdown-item" href="#!"><div class="color-picker__colors-color big" style="background-color: ${employee.fabric.fourteen[2]};" onclick="replaceImg('fabric-card__big-photo-card-${employee.id}','${employee.fabric.fourteen[0]}','fabric-name-card-${employee.id}', '${employee.fabric.fourteen[1]}')"></div></a>
                                </div>
                                <div class="d-flex flex-row mt-1">
                                    <a class="dropdown-item" href="#!"><div class="color-picker__colors-color big" style="background-color: ${employee.fabric.fifteen[2]};" onclick="replaceImg('fabric-card__big-photo-card-${employee.id}','${employee.fabric.fifteen[0]}','fabric-name-card-${employee.id}', '${employee.fabric.fifteen[1]}')"></div></a>
                                    <a class="dropdown-item" href="#!"><div class="color-picker__colors-color big" style="background-color: ${employee.fabric.sixteen[2]};" onclick="replaceImg('fabric-card__big-photo-card-${employee.id}','${employee.fabric.sixteen[0]}','fabric-name-card-${employee.id}', '${employee.fabric.sixteen[1]}')"></div></a>
                                    <a class="dropdown-item" href="#!"><div class="color-picker__colors-color big" style="background-color: ${employee.fabric.seventeen[2]};" onclick="replaceImg('fabric-card__big-photo-card-${employee.id}','${employee.fabric.seventeen[0]}','fabric-name-card-${employee.id}', '${employee.fabric.seventeen[1]}')"></div></a>
                                    <a class="dropdown-item" href="#!"><div class="color-picker__colors-color big" style="background-color: ${employee.fabric.nineteen[2]};" onclick="replaceImg('fabric-card__big-photo-card-${employee.id}','${employee.fabric.nineteen[0]}','fabric-name-card-${employee.id}', '${employee.fabric.nineteen[1]}')"></div></a>
                                    <a class="dropdown-item" href="#!"><div class="color-picker__colors-color big" style="background-color: ${employee.fabric.twenty[2]};" onclick="replaceImg('fabric-card__big-photo-card-${employee.id}','${employee.fabric.twenty[0]}','fabric-name-card-${employee.id}', '${employee.fabric.twenty[1]}')"></div></a>
                                </div>
                                <div class="d-flex flex-row mt-1">
                                    <a class="dropdown-item" href="#!"><div class="color-picker__colors-color big" style="background-color: ${employee.fabric.twentyOne[2]};" onclick="replaceImg('fabric-card__big-photo-card-${employee.id}','${employee.fabric.twentyOne[0]}','fabric-name-card-${employee.id}', '${employee.fabric.twentyOne[1]}')"></div></a>
                                    <a class="dropdown-item" href="#!"><div class="color-picker__colors-color big" style="background-color: ${employee.fabric.twentyTwo[2]};" onclick="replaceImg('fabric-card__big-photo-card-${employee.id}','${employee.fabric.twentyTwo[0]}','fabric-name-card-${employee.id}', '${employee.fabric.twentyTwo[1]}')"></div></a>
                                    <a class="dropdown-item" href="#!"><div class="color-picker__colors-color big" style="background-color: ${employee.fabric.twentyThree[2]};" onclick="replaceImg('fabric-card__big-photo-card-${employee.id}','${employee.fabric.twentyThree[0]}','fabric-name-card-${employee.id}', '${employee.fabric.twentyThree[1]}')"></div></a>
                                    <a class="dropdown-item" href="#!"><div class="color-picker__colors-color big" style="background-color: ${employee.fabric.twentyFour[2]};" onclick="replaceImg('fabric-card__big-photo-card-${employee.id}','${employee.fabric.twentyFour[0]}','fabric-name-card-${employee.id}', '${employee.fabric.twentyFour[1]}')"></div></a>
                                    <a class="dropdown-item" href="#!"><div class="color-picker__colors-color big" style="background-color: ${employee.fabric.twentyFive[2]};" onclick="replaceImg('fabric-card__big-photo-card-${employee.id}','${employee.fabric.twentyFive[0]}','fabric-name-card-${employee.id}', '${employee.fabric.twentyFive[1]}')"></div></a>
                                </div>
                              </div>
                        </div>
                    </div>
                    
                    <div class="fabric__order flex-column d-flex" style="margin-top: 37px;">
                        <div class="fabric__price"><span id="number-${employee.id}">${employee.cost.price[0]}</span> <span class="price">BYN./м<sup>2</sup></span></div>
                        <button class="button-secondary big-button button mt-2 ml-lg-auto" onclick="openModal()">Заказать</button>
                    </div>
            </div>
        </div>  	
        `;
        })
        .join('');
    employeesGrid.innerHTML = htmlString;
};


loadEmployees();







const fabricCard = document.getElementById('card2');
let fabric = [];

const loadFabric = async () => {
    try {
        const res = await fetch('https://valentinajurievna.github.io/ComfortLux/Comfort%20Lux/json/dayNight.json');
        fabric = await res.json();
        displayFabric(fabric);
    } catch (err) {
        console.error(err);
    }
};

const displayFabric = (fabric) => {
		const String = fabric
        .map((employee) => {
            return `
            <div class="fabric-card p-4 flex-row d-flex col-lg-6 col-md-12 mt-md-5 mt-lg-0 mr-3 mb-3 wow animate__animated animate__fadeInUp" data-wow-delay="${employee.animation}s">
            <div class="fabric-card__photos flex-column d-flex">
                <div class="fabric-card__photo">
                    <div class="d-flex justify-content-end">
                        <div class="fabric-card__name-of-fabric align-self-end">
                            <h3 class="d-flex justify-content-center align-items-center mt-3" id="fabric-name-card-${employee.id}">${employee.fabric.one[1]}</h3>
                        </div>
                        <img src="${employee.fabric.one[0]}" class="fabric-card__big-photo img-fluid" id="fabric-card__big-photo-card-${employee.id}">
                    </div>
                    <div class="hover-effect" id="hover-effect-${employee.id}" onclick="openPhoto('fabric-card__big-photo-card-${employee.id}', 'hover-effect-${employee.id}')"  >
                        <a href="#"><img src="../img/icons/visibility.svg" class="img-fluid" alt=""></a>
                    </div>
                </div>
                <div id="carousel-card-${employee.id}" class="carousel slide mt-4" data-ride="carousel" data-interval="false" data-touch="true">
                      <div class="carousel-inner align-items-center">
                        <div class="carousel-item active">
                              <div class="flex-row d-flex justify-content-center">
                                    <div class="fabric-card__little-photo" onclick="replaceImg('fabric-card__big-photo-card-${employee.id}','${employee.fabric.two[0]}', 'fabric-name-card-${employee.id}', '${employee.fabric.two[1]}')">
                                          <img src="${employee.fabric.two[0]}" class="img-fluid">
                                    </div>
                                    <div class="fabric-card__little-photo ml-1" onclick="replaceImg('fabric-card__big-photo-card-${employee.id}', '${employee.fabric.three[0]}', 'fabric-name-card-${employee.id}', '${employee.fabric.three[1]}')">
                                         <img src="${employee.fabric.three[0]}" class="img-fluid">
                                    </div>
                                    <div class="fabric-card__little-photo ml-1" onclick="replaceImg('fabric-card__big-photo-card-${employee.id}','${employee.fabric.four[0]}', 'fabric-name-card-${employee.id}', '${employee.fabric.four[1]}')">
                                         <img src="${employee.fabric.four[0]}" class="img-fluid">
                                    </div>
                                  </div>
                        </div>
                        <div class="carousel-item">
                              <div class="flex-row d-flex justify-content-center">
                                <div class="fabric-card__little-photo" onclick="replaceImg('fabric-card__big-photo-card-${employee.id}','${employee.fabric.five[0]}','fabric-name-card-${employee.id}', '${employee.fabric.five[1]}')">
                                      <img src="${employee.fabric.five[0]}" class="img-fluid">
                                </div>
                                
                              </div>
                        </div>
                      </div>
                      <a class="carousel-control-prev justify-content-start" href="#carousel-card-${employee.id}" role="button" data-slide="prev">
                        <img src="../img/icons/back.png">
                      </a>
                      <a class="carousel-control-next justify-content-end" href="#carousel-card-${employee.id}" role="button" data-slide="next">
                            <img src="../img/icons/next.png">
                      </a>
                </div>
            </div>

            <div class="fabric__content flex-column d-flex ml-5">
                    <h2 class="fabric__title mt-0">${employee.title}</h2>
                    <p class="fabric__description mt-1"><b>Состав:</b> ${employee.description.structure[0]}, <br>${employee.description.structure[1]}<br><b>Затемнение:</b> ${employee.description.darkening}</p>
                    <div class="system d-flex flex-row align-self-baseline mt-5">
                        <div class="d-flex align-items-baseline">
                            <h3 class="title-fabric">Установка:&ensp;</h3>
                            <a id="installation-${employee.id}" class="installation"> Mini</a>
                        </div>

                        <div class="dropdown p-0">
                            <div id="dropdownMenuSystem${employee.id}" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                <img src="../img/icons/bottom.svg" class="color-picker__arrow ml-2 mt-1" width="8" height="8">
                            </div>
                            <div class="system__dropdown dropdown-menu mt-0" aria-labelledby="dropdownMenuSystem${employee.id}">
                                <a class="dropdown-item" href="#!" id="system_uni" onclick="SelectSystem('number-${employee.id}', 'installation-${employee.id}', ${employee.cost.price[1]}, '${employee.cost.installation[1]}')"> Uni</a>
                                <a class="dropdown-item" href="#!" id="system_mgs" onclick="SelectSystem('number-${employee.id}', 'installation-${employee.id}', ${employee.cost.price[2]}, '${employee.cost.installation[2]}')"> Mgs</a>
                                <a class="dropdown-item" href="#!" id="system_mini" onclick="SelectSystem('number-${employee.id}', 'installation-${employee.id}', ${employee.cost.price[0]}, '${employee.cost.installation[0]}')"> Mini</a>
                              </div>
                        </div>
                    </div>
                    <div class="color-picker d-flex flex-row align-self-baseline mt-1">
                        <h3 class="title-fabric">Цвета: </h3>
                        <div class="color-picker__colors d-flex flex-row align-self-baseline">
                            <div class="color-picker__colors-color big" style="background-color: ${employee.fabric.one[2]};" onclick="replaceImg('fabric-card__big-photo-card-${employee.id}','${employee.fabric.one[0]}','fabric-name-card-${employee.id}', '${employee.fabric.one[1]}')"></div>
                            <div class="color-picker__colors-color big" style="background-color: ${employee.fabric.two[2]};" onclick="replaceImg('fabric-card__big-photo-card-${employee.id}','${employee.fabric.two[0]}','fabric-name-card-${employee.id}', '${employee.fabric.two[1]}')"></div>
                            <div class="color-picker__colors-color big" style="background-color: ${employee.fabric.three[2]};" onclick="replaceImg('fabric-card__big-photo-card-${employee.id}','${employee.fabric.three[0]}','fabric-name-card-${employee.id}', '${employee.fabric.three[1]}')"></div>
                            <div class="color-picker__colors-color big" style="background-color: ${employee.fabric.four[2]};" onclick="replaceImg('fabric-card__big-photo-card-${employee.id}','${employee.fabric.four[0]}','fabric-name-card-${employee.id}', '${employee.fabric.four[1]}')"></div>
                        </div>

                        <div class="dropdown p-0">
                            <div id="dropdownMenu${employee.id}" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                <img src="../img/icons/bottom.svg" class="color-picker__arrow ml-2" width="9" height="9">
                            </div>
                            <div class="color-picker__dropdown dropdown-menu mt-0" aria-labelledby="dropdownMenu${employee.id}" >
                                <div class="d-flex flex-row">
                                    <a class="dropdown-item" href="#!"><div class="color-picker__colors-color big" style="background-color: ${employee.fabric.five[2]};" onclick="replaceImg('fabric-card__big-photo-card-${employee.id}','${employee.fabric.five[0]}','fabric-name-card-${employee.id}', '${employee.fabric.five[1]}')"></div></a>
                                
                                </div>
                              </div>
                        </div>
                    </div>
                    
                    <div class="fabric__order flex-column d-flex" style="margin-top: 37px;">
                        <div class="fabric__price"><span id="number-${employee.id}">${employee.cost.price[0]}</span> <span class="price">BYN./м<sup>2</sup></span></div>
                        <button class="button-secondary big-button button mt-2 ml-lg-auto" onclick="openModal()">Заказать</button>
                    </div>
            </div>
        </div>  	
        `;
        })
        .join('');
        fabricCard.innerHTML = String;
};


loadFabric();







function close(id, id_button) {
	state = document.getElementById(id).style.display;
	if (state == '') {
		document.getElementById(id).style.display = 'none';
		document.getElementById(id_button).style.boxShadow = "-5px -5px 16px rgba(255, 216, 186, 0.5), 5px 5px 16px rgba(191, 160, 138, 0.5)";
	}
	
}


function openRollerBlinds() {
	if (document.getElementById('roller-blinds').style.display == 'none') {
		document.getElementById('roller-blinds').style.display = '';
		document.getElementById('roller-blinds-button').style.boxShadow = "inset -5px -5px 16px rgba(255, 216, 186, 0.5), inset 5px 5px 16px rgba(191, 160, 138, 0.5)";
        document.getElementById('calculator').style.display = '';
		  close('vertical-blinds', 'vertical-blinds-button');
    	  close('horizontal-blinds', 'horizontal-blinds-button');
    	  close('roman-blinds', 'roman-blinds-button');
    	  close('japanese-panels', 'japanese-panels-button');
    	  close('pleated', 'pleated-button');
    	  close('bamboo', 'bamboo-button');
    	  close('cornices', 'cornices-button');
    	  close('mosquito-nets', 'mosquito-nets-button');
    	  close('curtain', 'curtain-button');
    	  close('sectional-doors', 'sectional-doors-button');
	}
}

function openVerticalBlinds() {
	if (document.getElementById('vertical-blinds').style.display == 'none') {
		document.getElementById('vertical-blinds').style.display = '';
		document.getElementById('vertical-blinds-button').style.boxShadow = "inset -5px -5px 16px rgba(255, 216, 186, 0.5), inset 5px 5px 16px rgba(191, 160, 138, 0.5)";
        document.getElementById('calculator').style.display = 'none';
		  close('roller-blinds', 'roller-blinds-button');
    	  close('horizontal-blinds', 'horizontal-blinds-button');
    	  close('roman-blinds', 'roman-blinds-button');
    	  close('japanese-panels', 'japanese-panels-button');
    	  close('pleated', 'pleated-button');
    	  close('bamboo', 'bamboo-button');
    	  close('cornices', 'cornices-button');
    	  close('mosquito-nets', 'mosquito-nets-button');
    	  close('curtain', 'curtain-button');
    	  close('sectional-doors', 'sectional-doors-button');
	}
}

function openHorizontalBlinds() {
	if (document.getElementById('horizontal-blinds').style.display == 'none') {
		document.getElementById('horizontal-blinds').style.display = '';
		document.getElementById('horizontal-blinds-button').style.boxShadow = "inset -5px -5px 16px rgba(255, 216, 186, 0.5), inset 5px 5px 16px rgba(191, 160, 138, 0.5)";
        document.getElementById('calculator').style.display = 'none';
		  close('roller-blinds', 'roller-blinds-button');
    	  close('vertical-blinds', 'vertical-blinds-button');
    	  close('roman-blinds', 'roman-blinds-button');
    	  close('japanese-panels', 'japanese-panels-button');
    	  close('pleated', 'pleated-button');
    	  close('bamboo', 'bamboo-button');
    	  close('cornices', 'cornices-button');
    	  close('mosquito-nets', 'mosquito-nets-button');
    	  close('curtain', 'curtain-button');
    	  close('sectional-doors', 'sectional-doors-button');
	}
}

function openRomanBlinds() {
	if (document.getElementById('roman-blinds').style.display == 'none') {
		document.getElementById('roman-blinds').style.display = '';
		document.getElementById('roman-blinds-button').style.boxShadow = "inset -5px -5px 16px rgba(255, 216, 186, 0.5), inset 5px 5px 16px rgba(191, 160, 138, 0.5)";
        document.getElementById('calculator').style.display = 'none';
		  close('roller-blinds', 'roller-blinds-button');
    	  close('vertical-blinds', 'vertical-blinds-button');
    	  close('horizontal-blinds', 'horizontal-blinds-button');
    	  close('japanese-panels', 'japanese-panels-button');
    	  close('pleated', 'pleated-button');
    	  close('bamboo', 'bamboo-button');
    	  close('cornices', 'cornices-button');
    	  close('mosquito-nets', 'mosquito-nets-button');
    	  close('curtain', 'curtain-button');
    	  close('sectional-doors', 'sectional-doors-button');
	}
}

function openJapanesePanels() {
	if (document.getElementById('japanese-panels').style.display == 'none') {
		document.getElementById('japanese-panels').style.display = '';
		document.getElementById('japanese-panels-button').style.boxShadow = "inset -5px -5px 16px rgba(255, 216, 186, 0.5), inset 5px 5px 16px rgba(191, 160, 138, 0.5)";
        document.getElementById('calculator').style.display = 'none';
		  close('roller-blinds', 'roller-blinds-button');
    	  close('vertical-blinds', 'vertical-blinds-button');
    	  close('horizontal-blinds', 'horizontal-blinds-button');
    	  close('roman-blinds', 'roman-blinds-button');
    	  close('pleated', 'pleated-button');
    	  close('bamboo', 'bamboo-button');
    	  close('cornices', 'cornices-button');
    	  close('mosquito-nets', 'mosquito-nets-button');
    	  close('curtain', 'curtain-button');
    	  close('sectional-doors', 'sectional-doors-button');
	}
}

function openPleated() {
	if (document.getElementById('pleated').style.display == 'none') {
		document.getElementById('pleated').style.display = '';
		document.getElementById('pleated-button').style.boxShadow = "inset -5px -5px 16px rgba(255, 216, 186, 0.5), inset 5px 5px 16px rgba(191, 160, 138, 0.5)";
        document.getElementById('calculator').style.display = 'none';
		  close('roller-blinds', 'roller-blinds-button');
    	  close('vertical-blinds', 'vertical-blinds-button');
    	  close('horizontal-blinds', 'horizontal-blinds-button');
    	  close('roman-blinds', 'roman-blinds-button');
    	  close('japanese-panels', 'japanese-panels-button');
    	  close('bamboo', 'bamboo-button');
    	  close('cornices', 'cornices-button');
    	  close('mosquito-nets', 'mosquito-nets-button');
    	  close('curtain', 'curtain-button');
    	  close('sectional-doors', 'sectional-doors-button');
	}
}

function openBamboo() {
	if (document.getElementById('bamboo').style.display == 'none') {
		document.getElementById('bamboo').style.display = '';
		document.getElementById('bamboo-button').style.boxShadow = "inset -5px -5px 16px rgba(255, 216, 186, 0.5), inset 5px 5px 16px rgba(191, 160, 138, 0.5)";
        document.getElementById('calculator').style.display = 'none';
		  close('roller-blinds', 'roller-blinds-button');
    	  close('vertical-blinds', 'vertical-blinds-button');
    	  close('horizontal-blinds', 'horizontal-blinds-button');
    	  close('roman-blinds', 'roman-blinds-button');
    	  close('japanese-panels', 'japanese-panels-button');
    	  close('pleated', 'pleated-button');
    	  close('cornices', 'cornices-button');
    	  close('mosquito-nets', 'mosquito-nets-button');
    	  close('curtain', 'curtain-button');
    	  close('sectional-doors', 'sectional-doors-button');
	}
}

function openCornices() {
	if (document.getElementById('cornices').style.display == 'none') {
		document.getElementById('cornices').style.display = '';
		document.getElementById('cornices-button').style.boxShadow = "inset -5px -5px 16px rgba(255, 216, 186, 0.5), inset 5px 5px 16px rgba(191, 160, 138, 0.5)";
        document.getElementById('calculator').style.display = 'none';
		  close('roller-blinds', 'roller-blinds-button');
    	  close('vertical-blinds', 'vertical-blinds-button');
    	  close('horizontal-blinds', 'horizontal-blinds-button');
    	  close('roman-blinds', 'roman-blinds-button');
    	  close('japanese-panels', 'japanese-panels-button');
    	  close('pleated', 'pleated-button');
    	  close('bamboo', 'bamboo-button');
    	  close('mosquito-nets', 'mosquito-nets-button');
    	  close('curtain', 'curtain-button');
    	  close('sectional-doors', 'sectional-doors-button');
	}
}

function openMosquitoNets() {
	if (document.getElementById('mosquito-nets').style.display == 'none') {
		document.getElementById('mosquito-nets').style.display = '';
		document.getElementById('mosquito-nets-button').style.boxShadow = "inset -5px -5px 16px rgba(255, 216, 186, 0.5), inset 5px 5px 16px rgba(191, 160, 138, 0.5)";
        document.getElementById('calculator').style.display = 'none';
		  close('roller-blinds', 'roller-blinds-button');
    	  close('vertical-blinds', 'vertical-blinds-button');
    	  close('horizontal-blinds', 'horizontal-blinds-button');
    	  close('roman-blinds', 'roman-blinds-button');
    	  close('japanese-panels', 'japanese-panels-button');
    	  close('pleated', 'pleated-button');
    	  close('bamboo', 'bamboo-button');
    	  close('cornices', 'cornices-button');
    	  close('curtain', 'curtain-button');
    	  close('sectional-doors', 'sectional-doors-button');
	}
}

function openCurtain() {
	if (document.getElementById('curtain').style.display == 'none') {
		document.getElementById('curtain').style.display = '';
		document.getElementById('curtain-button').style.boxShadow = "inset -5px -5px 16px rgba(255, 216, 186, 0.5), inset 5px 5px 16px rgba(191, 160, 138, 0.5)";
        document.getElementById('calculator').style.display = 'none';
		  close('roller-blinds', 'roller-blinds-button');
    	  close('vertical-blinds', 'vertical-blinds-button');
    	  close('horizontal-blinds', 'horizontal-blinds-button');
    	  close('roman-blinds', 'roman-blinds-button');
    	  close('japanese-panels', 'japanese-panels-button');
    	  close('pleated', 'pleated-button');
    	  close('bamboo', 'bamboo-button');
    	  close('cornices', 'cornices-button');
    	  close('mosquito-nets', 'mosquito-nets-button');
    	  close('sectional-doors', 'sectional-doors-button');
	}
}

function openSectionalDoors() {
	if (document.getElementById('sectional-doors').style.display == 'none') {
		document.getElementById('sectional-doors').style.display = '';
		document.getElementById('sectional-doors-button').style.boxShadow = "inset -5px -5px 16px rgba(255, 216, 186, 0.5), inset 5px 5px 16px rgba(191, 160, 138, 0.5)";
        document.getElementById('calculator').style.display = 'none';
		  close('roller-blinds', 'roller-blinds-button');
    	  close('vertical-blinds', 'vertical-blinds-button');
    	  close('horizontal-blinds', 'horizontal-blinds-button');
    	  close('roman-blinds', 'roman-blinds-button');
    	  close('japanese-panels', 'japanese-panels-button');
    	  close('pleated', 'pleated-button');
    	  close('bamboo', 'bamboo-button');
    	  close('cornices', 'cornices-button');
    	  close('mosquito-nets', 'mosquito-nets-button');
    	  close('curtain', 'curtain-button');
	}
}


function replaceImg(id, img, name, value) {
	var a = document.getElementById(id);
	a.src = img;
	document.getElementById(name).innerHTML = value;
}

function SelectSystem(id, id_main, value, name) {
    price = document.getElementById(id);
    price.innerHTML = value;
    document.getElementById(id_main).innerHTML = name;
}



function openPhoto(id) {
	var modal = document.getElementById('myModal');
	var img = document.getElementById(id);
	var modalImg = document.getElementById('img');
    var span = document.getElementsByClassName('close')[0];
	span.onclick = function() {
		modal.style.display = 'none';
        document.querySelector('section').classList.remove('filter');
        document.querySelector('header').classList.remove('filter');
        document.querySelector('footer').classList.remove('filter');
        document.querySelector('body').classList.remove('remove-scroll');
	}

	modal.onclick = function(e) {
		event = e || window.e
    		if (event.target == this) {
        		modal.style.display = 'none';
                document.querySelector('section').classList.remove('filter');
                document.querySelector('header').classList.remove('filter');
                document.querySelector('footer').classList.remove('filter');
                document.querySelector('body').classList.remove('remove-scroll');
			}
	}

    modal.style.display = 'block';
    document.querySelector('section').classList.add('filter');
    document.querySelector('header').classList.add('filter');
    document.querySelector('footer').classList.add('filter');
    document.querySelector('body').classList.add('remove-scroll');
    modalImg.src = img.src;
}


function openModal() {
	var modal = document.getElementById('modal-order');
    var span = document.getElementsByClassName('close')[0];
    span.onclick = function() {
        modal.style.display = 'none';
        document.querySelector('section').classList.remove('filter');
        document.querySelector('header').classList.remove('filter');
        document.querySelector('footer').classList.remove('filter');
        document.getElementById('main-page').classList.remove('filter');
        document.querySelector('body').classList.remove('remove-scroll');
    }

    modal.onclick = function(e) {
        event = e || window.e
            if (event.target == this) {
                modal.style.display = 'none';
                document.querySelector('section').classList.remove('filter');
                document.querySelector('header').classList.remove('filter');
                document.querySelector('footer').classList.remove('filter');
                document.getElementById('main-page').classList.remove('filter');
                document.querySelector('body').classList.remove('remove-scroll');
            }
    }
	modal.style.display = 'block';
    document.querySelector('section').classList.add('filter');
    document.querySelector('header').classList.add('filter');
    document.querySelector('footer').classList.add('filter');
    document.getElementById('main-page').classList.add('filter');
    document.querySelector('body').classList.add('remove-scroll');
}


function openDropdown() {
	if (document.getElementById('dropdown').style.display == 'none' ) {
		document.getElementById('dropdown').style.display = '';
	}

	else {
		document.getElementById('dropdown').style.display == 'none';
	}
}


// Calculator

function fun() {
    var width = document.getElementById('width').value;
    var height = document.getElementById('height').value;
    var quantity = document.getElementById('quantity').value;
    var finalValue = document.getElementById('final-value');

    var yourWidth = document.getElementById('your-width');
    var yourHeight = document.getElementById('your-height');
    var yourQuantity = document.getElementById('your-quantity');
    var yourAdditional = document.getElementById('your-additional');
    var yourSystem = document.getElementById('your-system');
    var yourFabricType = document.getElementById('your-fabric-type');
    var yourFabricName = document.getElementById('your-fabric-name');
    var yourFabricNumber = document.getElementById('your-fabric-number');

    yourWidth.innerHTML = width;
    yourHeight.innerHTML = height;
    yourQuantity.innerHTML = quantity;


    if (document.getElementById('mini').checked) {
        yourSystem.innerHTML = 'Mini';
    }

    if (document.getElementById('uni').checked) {
        yourSystem.innerHTML = 'Uni';
    }

    if (document.getElementById('mgs').checked) {
        yourSystem.innerHTML = 'Mgs';
    }


    if (document.getElementById('White').checked) {
        yourAdditional.innerHTML = 'Белая';
    }

    if (document.getElementById('Brown').checked) {
        var Brown = Math.round(final+((parseInt(width)/100)*31));
        finalValue.innerHTML = Brown;
        yourAdditional.innerHTML = 'Коричневая';
    }

    if (document.getElementById('Tree').checked) {
        var Tree = Math.round(final+((parseInt(width)/100)*103));
        finalValue.innerHTML = Tree;
        yourAdditional.innerHTML = 'Ламинация';
    }

    if (document.getElementById('standart').checked) {

        yourFabricType.innerHTML = 'Стандарт';
        var s = document.getElementById("names-of-standart").options.selectedIndex;
        var select = document.getElementById("names-of-standart").options[s].value;

        if (select == 'ab') {
            var n = document.getElementById("number-of-ab").options.selectedIndex;
            var number = document.getElementById("number-of-ab").options[n].text;
            if (document.getElementById('mini').checked) {
                var final = Math.round( (parseInt(width)/100)*(parseInt(height)/100)*quantity*92 );
                finalValue.innerHTML = final;
            }

            if (document.getElementById('uni').checked) {
                var final = Math.round((parseInt(width)/100)*(parseInt(height)/100)*quantity*105);
                finalValue.innerHTML = final;
            }

            if (document.getElementById('mgs').checked) {
                var final = Math.round((parseInt(width)/100)*(parseInt(height)/100)*quantity*141);
                finalValue.innerHTML = final;
            }

            yourFabricName.innerHTML = 'AB';
            yourFabricNumber.innerHTML = number;
        }

        if (select == 'ar') {
            var n = document.getElementById("number-of-ar").options.selectedIndex;
            var number = document.getElementById("number-of-ar").options[n].text;
            if (document.getElementById('mini').checked) {
                var final = Math.round( (parseInt(width)/100)*(parseInt(height)/100)*quantity*92 );
                finalValue.innerHTML = final;
            }

            if (document.getElementById('uni').checked) {
                var final = Math.round((parseInt(width)/100)*(parseInt(height)/100)*quantity*105);
                finalValue.innerHTML = final;
            }

            if (document.getElementById('mgs').checked) {
                var final = Math.round((parseInt(width)/100)*(parseInt(height)/100)*quantity*141);
                finalValue.innerHTML = final;
            }

            yourFabricName.innerHTML = 'AR';
            yourFabricNumber.innerHTML = number;
        }

        if (select == 'wz') {
            var n = document.getElementById("number-of-wz").options.selectedIndex;
            var number = document.getElementById("number-of-wz").options[n].text;
            if (document.getElementById('mini').checked) {
                var final = Math.round( (parseInt(width)/100)*(parseInt(height)/100)*quantity*92 );
                finalValue.innerHTML = final;
            }

            if (document.getElementById('uni').checked) {
                var final = Math.round((parseInt(width)/100)*(parseInt(height)/100)*quantity*105);
                finalValue.innerHTML = final;
            }

            if (document.getElementById('mgs').checked) {
                var final = Math.round((parseInt(width)/100)*(parseInt(height)/100)*quantity*141);
                finalValue.innerHTML = final;
            }

            yourFabricName.innerHTML = 'WZ';
            yourFabricNumber.innerHTML = number;
        }

        if (select == 'di') {
            var n = document.getElementById("number-of-di").options.selectedIndex;
            var number = document.getElementById("number-of-di").options[n].text;
            if (document.getElementById('mini').checked) {
                var final = Math.round( (parseInt(width)/100)*(parseInt(height)/100)*quantity*92 );
                finalValue.innerHTML = final;
            }

            if (document.getElementById('uni').checked) {
                var final = Math.round((parseInt(width)/100)*(parseInt(height)/100)*quantity*105);
                finalValue.innerHTML = final;
            }

            if (document.getElementById('mgs').checked) {
                var final = Math.round((parseInt(width)/100)*(parseInt(height)/100)*quantity*141);
                finalValue.innerHTML = final;
            }

            yourFabricName.innerHTML = 'DI';
            yourFabricNumber.innerHTML = number;
        }

    }

    if (document.getElementById('day-night').checked) {
        yourFabricType.innerHTML = 'День-ночь';
        var s = document.getElementById("names-of-day-night").options.selectedIndex;
        var select = document.getElementById("names-of-day-night").options[s].value;

        if (select == 'luxury') {
            var n = document.getElementById("number-of-luxury").options.selectedIndex;
            var number = document.getElementById("number-of-luxury").options[n].text;
            if (document.getElementById('mini').checked) {
                var final = Math.round( (parseInt(width)/100)*(parseInt(height)/100)*quantity*92 );
                finalValue.innerHTML = final;
            }

            if (document.getElementById('uni').checked) {
                var final = Math.round((parseInt(width)/100)*(parseInt(height)/100)*quantity*105);
                finalValue.innerHTML = final;
            }

            if (document.getElementById('mgs').checked) {
                var final = Math.round((parseInt(width)/100)*(parseInt(height)/100)*quantity*141);
                finalValue.innerHTML = final;
            }

            yourFabricName.innerHTML = 'Luxury';
            yourFabricNumber.innerHTML = number;
        }

        if (select == 'juventus') {
            var n = document.getElementById("number-of-juventus").options.selectedIndex;
            var number = document.getElementById("number-of-juventus").options[n].text;
            if (document.getElementById('mini').checked) {
                var final = Math.round( (parseInt(width)/100)*(parseInt(height)/100)*quantity*92 );
                finalValue.innerHTML = final;
            }

            if (document.getElementById('uni').checked) {
                var final = Math.round((parseInt(width)/100)*(parseInt(height)/100)*quantity*105);
                finalValue.innerHTML = final;
            }

            if (document.getElementById('mgs').checked) {
                var final = Math.round((parseInt(width)/100)*(parseInt(height)/100)*quantity*121);
                finalValue.innerHTML = final;
            }

            yourFabricName.innerHTML = 'Juventus';
            yourFabricNumber.innerHTML = number;
        }

        if (select == 'marbella') {
            var n = document.getElementById("number-of-marbella").options.selectedIndex;
            var number = document.getElementById("number-of-marbella").options[n].text;
            if (document.getElementById('mini').checked) {
                var final = Math.round( (parseInt(width)/100)*(parseInt(height)/100)*quantity*97 );
                finalValue.innerHTML = final;
            }

            if (document.getElementById('uni').checked) {
                var final = Math.round((parseInt(width)/100)*(parseInt(height)/100)*quantity*112);
                finalValue.innerHTML = final;
            }

            if (document.getElementById('mgs').checked) {
                var final = Math.round((parseInt(width)/100)*(parseInt(height)/100)*quantity*156);
                finalValue.innerHTML = final;
            }

            yourFabricName.innerHTML = 'Marbella';
            yourFabricNumber.innerHTML = number;
        }

    }

    if (document.getElementById('blackout').checked) {
        yourFabricType.innerHTML = 'Блэкаут';
        var s = document.getElementById("names-of-blackout").options.selectedIndex;
        var select = document.getElementById("names-of-blackout").options[s].value;

        if (select == 'i') {
            var n = document.getElementById("number-of-I(BO)").options.selectedIndex;
            var number = document.getElementById("number-of-I(BO)").options[n].text;
            if (document.getElementById('mini').checked) {
                var final = Math.round( (parseInt(width)/100)*(parseInt(height)/100)*quantity*92 );
                finalValue.innerHTML = final;
            }

            if (document.getElementById('uni').checked) {
                var final = Math.round((parseInt(width)/100)*(parseInt(height)/100)*quantity*105);
                finalValue.innerHTML = final;
            }

            if (document.getElementById('mgs').checked) {
                var final = Math.round((parseInt(width)/100)*(parseInt(height)/100)*quantity*141);
                finalValue.innerHTML = final;
            }

            yourFabricName.innerHTML = 'I (BO)';
            yourFabricNumber.innerHTML = number;
        }

        if (select == 'nox') {
            var n = document.getElementById("number-of-NOX(BO)").options.selectedIndex;
            var number = document.getElementById("number-of-NOX(BO)").options[n].text;
            if (document.getElementById('mini').checked) {
                var final = Math.round( (parseInt(width)/100)*(parseInt(height)/100)*quantity*92 );
                finalValue.innerHTML = final;
            }

            if (document.getElementById('uni').checked) {
                var final = Math.round((parseInt(width)/100)*(parseInt(height)/100)*quantity*105);
                finalValue.innerHTML = final;
            }

            if (document.getElementById('mgs').checked) {
                var final = Math.round((parseInt(width)/100)*(parseInt(height)/100)*quantity*121);
                finalValue.innerHTML = final;
            }

            yourFabricName.innerHTML = 'NOX (BO)';
            yourFabricNumber.innerHTML = number;
        }

        if (select == 'pb') {
            var n = document.getElementById("number-of-PB(BO)").options.selectedIndex;
            var number = document.getElementById("number-of-PB(BO)").options[n].text;
            if (document.getElementById('mini').checked) {
                var final = Math.round( (parseInt(width)/100)*(parseInt(height)/100)*quantity*97 );
                finalValue.innerHTML = final;
            }

            if (document.getElementById('uni').checked) {
                var final = Math.round((parseInt(width)/100)*(parseInt(height)/100)*quantity*112);
                finalValue.innerHTML = final;
            }

            if (document.getElementById('mgs').checked) {
                var final = Math.round((parseInt(width)/100)*(parseInt(height)/100)*quantity*156);
                finalValue.innerHTML = final;
            }

            yourFabricName.innerHTML = 'PB(BO)';
            yourFabricNumber.innerHTML = number;
        }

        if (select == 'sf') {
            var n = document.getElementById("number-of-SF(BO)").options.selectedIndex;
            var number = document.getElementById("number-of-SF(BO)").options[n].text;
            if (document.getElementById('mini').checked) {
                var final = Math.round( (parseInt(width)/100)*(parseInt(height)/100)*quantity*97 );
                finalValue.innerHTML = final;
            }

            if (document.getElementById('uni').checked) {
                var final = Math.round((parseInt(width)/100)*(parseInt(height)/100)*quantity*112);
                finalValue.innerHTML = final;
            }

            if (document.getElementById('mgs').checked) {
                var final = Math.round((parseInt(width)/100)*(parseInt(height)/100)*quantity*156);
                finalValue.innerHTML = final;
            }

            yourFabricName.innerHTML = 'SF(BO)';
            yourFabricNumber.innerHTML = number;
        }

        if (select == 'str') {
            var n = document.getElementById("number-of-STR(BO)").options.selectedIndex;
            var number = document.getElementById("number-of-STR(BO)").options[n].text;
            if (document.getElementById('mini').checked) {
                var final = Math.round( (parseInt(width)/100)*(parseInt(height)/100)*quantity*97 );
                finalValue.innerHTML = final;
            }

            if (document.getElementById('uni').checked) {
                var final = Math.round((parseInt(width)/100)*(parseInt(height)/100)*quantity*112);
                finalValue.innerHTML = final;
            }

            if (document.getElementById('mgs').checked) {
                var final = Math.round((parseInt(width)/100)*(parseInt(height)/100)*quantity*156);
                finalValue.innerHTML = final;
            }

            yourFabricName.innerHTML = 'STR(BO)';
            yourFabricNumber.innerHTML = number;
        }
    }

   
    
}



function openStandart() {
    if (document.getElementById('standart').checked) {
        document.getElementById('names-of-standart').style.display = '';
        document.getElementById('number-of-ab').style.display = '';
        document.getElementById('number-of-juventus').style.display = 'none';
        document.getElementById('number-of-I(BO)').style.display = 'none';
        document.getElementById('number-of-NOX(BO)').style.display = 'none';
        document.getElementById('number-of-PB(BO)').style.display = 'none';
        document.getElementById('number-of-SF(BO)').style.display = 'none';
        document.getElementById('number-of-STR(BO)').style.display = 'none';
        document.getElementById('number-of-luxury').style.display = 'none';
        document.getElementById('number-of-marbella').style.display = 'none';
        document.getElementById('names-of-day-night').style.display = 'none';
        document.getElementById('names-of-blackout').style.display = 'none';
        document.getElementById('photo').src = "../img/photos/Рольшторы/AB/401.jpg";
    }  
}

function openDayNight() {
    if (document.getElementById('day-night').checked) {
        document.getElementById('names-of-day-night').style.display = '';
        document.getElementById('number-of-luxury').style.display = '';
        document.getElementById('number-of-ab').style.display = 'none';
        document.getElementById('number-of-ar').style.display = 'none';
        document.getElementById('number-of-wz').style.display = 'none';
        document.getElementById('number-of-di').style.display = 'none';
        document.getElementById('number-of-I(BO)').style.display = 'none';
        document.getElementById('number-of-NOX(BO)').style.display = 'none';
        document.getElementById('number-of-PB(BO)').style.display = 'none';
        document.getElementById('number-of-SF(BO)').style.display = 'none';
        document.getElementById('number-of-STR(BO)').style.display = 'none';
        document.getElementById('names-of-standart').style.display = 'none';
        document.getElementById('names-of-blackout').style.display = 'none';
        document.getElementById('photo').src = "../img/photos/Рольшторы/День-Ночь/Luxury/11.jpg";
    }  
}

function openBlackout() {
    if (document.getElementById('blackout').checked) {
        document.getElementById('names-of-blackout').style.display = '';
        document.getElementById('number-of-I(BO)').style.display = '';
        document.getElementById('number-of-ab').style.display = 'none';
        document.getElementById('number-of-ar').style.display = 'none';
        document.getElementById('number-of-wz').style.display = 'none';
        document.getElementById('number-of-di').style.display = 'none';
        document.getElementById('number-of-luxury').style.display = 'none';
        document.getElementById('number-of-juventus').style.display = 'none';
        document.getElementById('number-of-marbella').style.display = 'none';
        document.getElementById('names-of-standart').style.display = 'none';
        document.getElementById('names-of-day-night').style.display = 'none';
        document.getElementById('photo').src = "../img/photos/Рольшторы/Блэкаут/I (BO)/2.jpg";
    }
}


function standartNames() {
    var s = document.getElementById("names-of-standart").options.selectedIndex;
    var select = document.getElementById("names-of-standart").options[s].value;

    if (document.getElementById('mini').checked) {
        if (select == 'ab') {
            document.getElementById('number-of-ab').style.display = '';
            document.getElementById('number-of-ar').style.display = 'none';
            document.getElementById('number-of-wz').style.display = 'none';
            document.getElementById('number-of-di').style.display = 'none';
            document.getElementById('photoMini').src = "../img/photos/Калькулятор/AB/401.png";
        }

        if (select == 'ar') {
            document.getElementById('number-of-ar').style.display = '';
            document.getElementById('number-of-ab').style.display = 'none';
            document.getElementById('number-of-wz').style.display = 'none';
            document.getElementById('number-of-di').style.display = 'none';
            document.getElementById('photoMini').src = "../img/photos/Калькулятор/AR/1839.png";
        }

        if (select == 'wz') {
            document.getElementById('number-of-wz').style.display = '';
            document.getElementById('number-of-ab').style.display = 'none';
            document.getElementById('number-of-ar').style.display = 'none';
            document.getElementById('number-of-di').style.display = 'none';
            document.getElementById('photoMini').src = "../img/photos/Калькулятор/WZ/03.png";
        }

        if (select == 'di') {
            document.getElementById('number-of-di').style.display = '';
            document.getElementById('number-of-ab').style.display = 'none';
            document.getElementById('number-of-wz').style.display = 'none';
            document.getElementById('number-of-ar').style.display = 'none';
            document.getElementById('photoMini').src = "../img/photos/Калькулятор/DI/7466.png";
        }
    }

    if (document.getElementById('uni').checked) {

        if (select == 'ab') {
            document.getElementById('number-of-ab').style.display = '';
            document.getElementById('number-of-ar').style.display = 'none';
            document.getElementById('number-of-wz').style.display = 'none';
            document.getElementById('number-of-di').style.display = 'none';
            document.getElementById('photo').src = "../img/photos/Рольшторы/AB/401.jpg";
        }

        if (select == 'ar') {
            document.getElementById('number-of-ar').style.display = '';
            document.getElementById('number-of-ab').style.display = 'none';
            document.getElementById('number-of-wz').style.display = 'none';
            document.getElementById('number-of-di').style.display = 'none';
            document.getElementById('photo').src = "../img/photos/Рольшторы/AR/1839.jpg";
        }

        if (select == 'wz') {
            document.getElementById('number-of-wz').style.display = '';
            document.getElementById('number-of-ab').style.display = 'none';
            document.getElementById('number-of-ar').style.display = 'none';
            document.getElementById('number-of-di').style.display = 'none';
            document.getElementById('photo').src = "../img/photos/Рольшторы/WZ/03.jpg";
        }

        if (select == 'di') {
            document.getElementById('number-of-di').style.display = '';
            document.getElementById('number-of-ab').style.display = 'none';
            document.getElementById('number-of-wz').style.display = 'none';
            document.getElementById('number-of-ar').style.display = 'none';
            document.getElementById('photo').src = "../img/photos/Рольшторы/DI/7466.jpg";
        }
    }

    
}


function dayNightNames() {
    var s = document.getElementById("names-of-day-night").options.selectedIndex;
    var select = document.getElementById("names-of-day-night").options[s].value;

    if(document.getElementById('mini').checked) {
        if (select == 'juventus') {
            document.getElementById('number-of-juventus').style.display = '';
            document.getElementById('number-of-luxury').style.display = 'none';
            document.getElementById('number-of-marbella').style.display = 'none';
            document.getElementById('photoMini').src = "../img/photos/Калькулятор/Juventus/02.png";
        }

        if (select == 'luxury') {
            document.getElementById('number-of-luxury').style.display = '';
            document.getElementById('number-of-juventus').style.display = 'none';
            document.getElementById('number-of-marbella').style.display = 'none';
            document.getElementById('photoMini').src = "../img/photos/Калькулятор/Luxury/11.png";
        }

        if (select == 'marbella') {
            document.getElementById('number-of-marbella').style.display = '';
            document.getElementById('number-of-juventus').style.display = 'none';
            document.getElementById('number-of-luxury').style.display = 'none';
            document.getElementById('photoMini').src = "../img/photos/Калькулятор/Marbella/601.png";
        }
    }

    if(document.getElementById('uni').checked) {
        if (select == 'juventus') {
            document.getElementById('number-of-juventus').style.display = '';
            document.getElementById('number-of-luxury').style.display = 'none';
            document.getElementById('number-of-marbella').style.display = 'none';
            document.getElementById('photo').src = "../img/photos/Рольшторы/День-Ночь/Juventus/02.jpg";
        }

        if (select == 'luxury') {
            document.getElementById('number-of-luxury').style.display = '';
            document.getElementById('number-of-juventus').style.display = 'none';
            document.getElementById('number-of-marbella').style.display = 'none';
            document.getElementById('photo').src = "../img/photos/Рольшторы/День-Ночь/Luxury/11.jpg";
        }

        if (select == 'marbella') {
            document.getElementById('number-of-marbella').style.display = '';
            document.getElementById('number-of-juventus').style.display = 'none';
            document.getElementById('number-of-luxury').style.display = 'none';
            document.getElementById('photo').src = "../img/photos/Рольшторы/День-Ночь/Marbella/601.jpg";
        }
    }

   
    
}


function blackoutNames() {
    var s = document.getElementById("names-of-blackout").options.selectedIndex;
    var select = document.getElementById("names-of-blackout").options[s].text;

    if (document.getElementById('mini').checked) {
        if (select == 'I (BO)') {
            document.getElementById('number-of-I(BO)').style.display = '';
            document.getElementById('number-of-NOX(BO)').style.display = 'none';
            document.getElementById('number-of-PB(BO)').style.display = 'none';
            document.getElementById('number-of-SF(BO)').style.display = 'none';
            document.getElementById('number-of-STR(BO)').style.display = 'none';
            document.getElementById('photoMini').src = "../img/photos/Калькулятор/I (BO)/2.png";
            
        }

        if (select == 'NOX (BO)') {
            document.getElementById('number-of-NOX(BO)').style.display = '';
            document.getElementById('number-of-I(BO)').style.display = 'none';
            document.getElementById('number-of-PB(BO)').style.display = 'none';
            document.getElementById('number-of-SF(BO)').style.display = 'none';
            document.getElementById('number-of-STR(BO)').style.display = 'none';
            document.getElementById('photoMini').src = "../img/photos/Калькулятор/NOX (BO)/3.png";
        }

        if (select == 'PB (BO)') {
            document.getElementById('number-of-PB(BO)').style.display = '';
            document.getElementById('number-of-NOX(BO)').style.display = 'none';
            document.getElementById('number-of-I(BO)').style.display = 'none';
            document.getElementById('number-of-SF(BO)').style.display = 'none';
            document.getElementById('number-of-STR(BO)').style.display = 'none';
            document.getElementById('photoMini').src = "../img/photos/Калькулятор/PB (BO)/01.png";
        }

        if (select == 'SF (BO)') {
            document.getElementById('number-of-SF(BO)').style.display = '';
            document.getElementById('number-of-NOX(BO)').style.display = 'none';
            document.getElementById('number-of-PB(BO)').style.display = 'none';
            document.getElementById('number-of-I(BO)').style.display = 'none';
            document.getElementById('number-of-STR(BO)').style.display = 'none';
            document.getElementById('photoMini').src = "../img/photos/Калькулятор/SF (BO)/01.png";
        }

        if (select == 'STR (BO)') {
            document.getElementById('number-of-STR(BO)').style.display = '';
            document.getElementById('number-of-NOX(BO)').style.display = 'none';
            document.getElementById('number-of-PB(BO)').style.display = 'none';
            document.getElementById('number-of-SF(BO)').style.display = 'none';
            document.getElementById('number-of-I(BO)').style.display = 'none';
            document.getElementById('photoMini').src = "../img/photos/Калькулятор/STR (BO)/1.png";
        }
    }

    if (document.getElementById('uni').checked) {
        if (select == 'I (BO)') {
            document.getElementById('number-of-I(BO)').style.display = '';
            document.getElementById('number-of-NOX(BO)').style.display = 'none';
            document.getElementById('number-of-PB(BO)').style.display = 'none';
            document.getElementById('number-of-SF(BO)').style.display = 'none';
            document.getElementById('number-of-STR(BO)').style.display = 'none';
            document.getElementById('photo').src = "../img/photos/Рольшторы/Блэкаут/I (BO)/2.jpg";
            
        }

        if (select == 'NOX (BO)') {
            document.getElementById('number-of-NOX(BO)').style.display = '';
            document.getElementById('number-of-I(BO)').style.display = 'none';
            document.getElementById('number-of-PB(BO)').style.display = 'none';
            document.getElementById('number-of-SF(BO)').style.display = 'none';
            document.getElementById('number-of-STR(BO)').style.display = 'none';
            document.getElementById('photo').src = "../img/photos/Рольшторы/Блэкаут/NOX (BO)/3.jpg";
        }

        if (select == 'PB (BO)') {
            document.getElementById('number-of-PB(BO)').style.display = '';
            document.getElementById('number-of-NOX(BO)').style.display = 'none';
            document.getElementById('number-of-I(BO)').style.display = 'none';
            document.getElementById('number-of-SF(BO)').style.display = 'none';
            document.getElementById('number-of-STR(BO)').style.display = 'none';
            document.getElementById('photo').src = "../img/photos/Рольшторы/Блэкаут/PB (BO)/01.jpg";
        }

        if (select == 'SF (BO)') {
            document.getElementById('number-of-SF(BO)').style.display = '';
            document.getElementById('number-of-NOX(BO)').style.display = 'none';
            document.getElementById('number-of-PB(BO)').style.display = 'none';
            document.getElementById('number-of-I(BO)').style.display = 'none';
            document.getElementById('number-of-STR(BO)').style.display = 'none';
            document.getElementById('photo').src = "../img/photos/Рольшторы/Блэкаут/SF (BO)/01.jpg";
        }

        if (select == 'STR (BO)') {
            document.getElementById('number-of-STR(BO)').style.display = '';
            document.getElementById('number-of-NOX(BO)').style.display = 'none';
            document.getElementById('number-of-PB(BO)').style.display = 'none';
            document.getElementById('number-of-SF(BO)').style.display = 'none';
            document.getElementById('number-of-I(BO)').style.display = 'none';
            document.getElementById('photo').src = "../img/photos/Рольшторы/Блэкаут/STR (BO)/1.jpg";
        }
    }   

}

function AB() {
    var s = document.getElementById("number-of-ab").options.selectedIndex;
    var select = document.getElementById("number-of-ab").options[s].value;

    if (select == 401) {
        if (document.getElementById('mini').checked) {
            document.getElementById('photoMini').src = "../img/photos/Калькулятор/AB/401.png";
        }
        if (document.getElementById('uni').checked) {
            document.getElementById('photo').src = "../img/photos/Рольшторы/AB/401.jpg";
        }     
    }

    if (select == 403) {
        if (document.getElementById('mini').checked) {
            document.getElementById('photoMini').src = "../img/photos/Калькулятор/AB/403.png";
        }
        if (document.getElementById('uni').checked) {
            document.getElementById('photo').src = "../img/photos/Рольшторы/AB/403.jpg";
        } 
    }

    if (select == 404) {
        if (document.getElementById('mini').checked) {
            document.getElementById('photoMini').src = "../img/photos/Калькулятор/AB/404.png";
        }
        if (document.getElementById('uni').checked) {
            document.getElementById('photo').src = "../img/photos/Рольшторы/AB/404.jpg";
        }
    }

    if (select == 405) {
        if (document.getElementById('mini').checked) {
            document.getElementById('photoMini').src = "../img/photos/Калькулятор/AB/405.png";
        }
        if (document.getElementById('uni').checked) {
            document.getElementById('photo').src = "../img/photos/Рольшторы/AB/405.jpg";
        }
    }

    if (select == 406) {
        if (document.getElementById('mini').checked) {
            document.getElementById('photoMini').src = "../img/photos/Калькулятор/AB/406.png";
        }
        if (document.getElementById('uni').checked) {
            document.getElementById('photo').src = "../img/photos/Рольшторы/AB/406.jpg";
        }
    }

    if (select == 407) {
        if (document.getElementById('mini').checked) {
            document.getElementById('photoMini').src = "../img/photos/Калькулятор/AB/407.png";
        }
        if (document.getElementById('uni').checked) {
            document.getElementById('photo').src = "../img/photos/Рольшторы/AB/407.jpg";
        }
    }
}

function AR() {
    var s = document.getElementById("number-of-ar").options.selectedIndex;
    var select = document.getElementById("number-of-ar").options[s].value;

    if (select == 1839) {
        if (document.getElementById('mini').checked) {
            document.getElementById('photoMini').src = "../img/photos/Калькулятор/AR/1839.png";
        }
        if (document.getElementById('uni').checked) {
            document.getElementById('photo').src = "../img/photos/Рольшторы/AR/1839.jpg";
        }
    }

    if (select == 1842) {
        if (document.getElementById('mini').checked) {
            document.getElementById('photoMini').src = "../img/photos/Калькулятор/AR/1842.png";
        }
        if (document.getElementById('uni').checked) {
            document.getElementById('photo').src = "../img/photos/Рольшторы/AR/1842.jpg";
        }
    }

    if (select == 2236) {
        if (document.getElementById('mini').checked) {
            document.getElementById('photoMini').src = "../img/photos/Калькулятор/AR/2236.png";
        }
        if (document.getElementById('uni').checked) {
            document.getElementById('photo').src = "../img/photos/Рольшторы/AR/2236.jpg";
        }
    }

    if (select == 2282) {
        if (document.getElementById('mini').checked) {
            document.getElementById('photoMini').src = "../img/photos/Калькулятор/AR/2282.png";
        }
        if (document.getElementById('uni').checked) {
            document.getElementById('photo').src = "../img/photos/Рольшторы/AR/2282.jpg";
        }
    }
}

function WZ() {
    var s = document.getElementById("number-of-wz").options.selectedIndex;
    var select = document.getElementById("number-of-wz").options[s].value;

    if (select == 'wz03') {
        if (document.getElementById('mini').checked) {
            document.getElementById('photoMini').src = "../img/photos/Калькулятор/WZ/03.png";
        }
        if (document.getElementById('uni').checked) {
            document.getElementById('photo').src = "../img/photos/Рольшторы/WZ/03.jpg";
        }
    }

    if (select == 'wz04') {
        if (document.getElementById('mini').checked) {
            document.getElementById('photoMini').src = "../img/photos/Калькулятор/WZ/04.png";
        }
        if (document.getElementById('uni').checked) {
            document.getElementById('photo').src = "../img/photos/Рольшторы/WZ/04.jpg";
        }
    }

    if (select == 'wz11') {
        if (document.getElementById('mini').checked) {
            document.getElementById('photoMini').src = "../img/photos/Калькулятор/WZ/11.png";
        }
        if (document.getElementById('uni').checked) {
            document.getElementById('photo').src = "../img/photos/Рольшторы/WZ/11.jpg";
        }
    }

    if (select == 'wz13') {
        if (document.getElementById('mini').checked) {
            document.getElementById('photoMini').src = "../img/photos/Калькулятор/WZ/13.png";
        }
        if (document.getElementById('uni').checked) {
            document.getElementById('photo').src = "../img/photos/Рольшторы/WZ/13.jpg";
        }
    }

    if (select == 'wz14') {
        if (document.getElementById('mini').checked) {
            document.getElementById('photoMini').src = "../img/photos/Калькулятор/WZ/14.png";
        }
        if (document.getElementById('uni').checked) {
            document.getElementById('photo').src = "../img/photos/Рольшторы/WZ/14.jpg";
        }
    }

    if (select == 'wz16') {
        if (document.getElementById('mini').checked) {
            document.getElementById('photoMini').src = "../img/photos/Калькулятор/WZ/16.png";
        }
        if (document.getElementById('uni').checked) {
            document.getElementById('photo').src = "../img/photos/Рольшторы/WZ/16.jpg";
        }
    }

    if (select == 'wz17') {
        if (document.getElementById('mini').checked) {
            document.getElementById('photoMini').src = "../img/photos/Калькулятор/WZ/17.png";
        }
        if (document.getElementById('uni').checked) {
            document.getElementById('photo').src = "../img/photos/Рольшторы/WZ/17.jpg";
        }
    }

    if (select == 'wz18') {
        if (document.getElementById('mini').checked) {
            document.getElementById('photoMini').src = "../img/photos/Калькулятор/WZ/18.png";
        }
        if (document.getElementById('uni').checked) {
            document.getElementById('photo').src = "../img/photos/Рольшторы/WZ/18.jpg";
        }
    }

    if (select == 'wz19') {
        if (document.getElementById('mini').checked) {
            document.getElementById('photoMini').src = "../img/photos/Калькулятор/WZ/19.png";
        }
        if (document.getElementById('uni').checked) {
            document.getElementById('photo').src = "../img/photos/Рольшторы/WZ/19.jpg";
        }
    }
}

function DI() {
    var s = document.getElementById("number-of-di").options.selectedIndex;
    var select = document.getElementById("number-of-di").options[s].value;

    if (select == 7466) {
        if (document.getElementById('mini').checked) {
            document.getElementById('photoMini').src = "../img/photos/Калькулятор/DI/7466.png";
        }
        if (document.getElementById('uni').checked) {
            document.getElementById('photo').src = "../img/photos/Рольшторы/DI/7466.jpg";
        }
    }

    if (select == 7467) {
        if (document.getElementById('mini').checked) {
            document.getElementById('photoMini').src = "../img/photos/Калькулятор/DI/7467.png";
        }
        if (document.getElementById('uni').checked) {
            document.getElementById('photo').src = "../img/photos/Рольшторы/DI/7467.jpg";
        }
    }
}


function luxury() {
    var s = document.getElementById("number-of-luxury").options.selectedIndex;
    var select = document.getElementById("number-of-luxury").options[s].value;

    if (select == 11) {
        if (document.getElementById('mini').checked) {
            document.getElementById('photoMini').src = "../img/photos/Калькулятор/Luxury/11.png";
        }
        if (document.getElementById('uni').checked) {
            document.getElementById('photo').src = "../img/photos/Рольшторы/День-Ночь/Luxury/11.jpg";
        }
    }

    if (select == 12) {
        if (document.getElementById('mini').checked) {
            document.getElementById('photoMini').src = "../img/photos/Калькулятор/Luxury/12.png";
        }
        if (document.getElementById('uni').checked) {
            document.getElementById('photo').src = "../img/photos/Рольшторы/День-Ночь/Luxury/12.jpg";
        }
    }

    if (select == 14) {
        if (document.getElementById('mini').checked) {
            document.getElementById('photoMini').src = "../img/photos/Калькулятор/Luxury/14.png";
        }
        if (document.getElementById('uni').checked) {
            document.getElementById('photo').src = "../img/photos/Рольшторы/День-Ночь/Luxury/14.jpg";
        }
    }

    if (select == 16) {
        if (document.getElementById('mini').checked) {
            document.getElementById('photoMini').src = "../img/photos/Калькулятор/Luxury/16.png";
        }
        if (document.getElementById('uni').checked) {
            document.getElementById('photo').src = "../img/photos/Рольшторы/День-Ночь/Luxury/16.jpg";
        }
    }

    if (select == 18) {
        if (document.getElementById('mini').checked) {
            document.getElementById('photoMini').src = "../img/photos/Калькулятор/Luxury/18.png";
        }
        if (document.getElementById('uni').checked) {
            document.getElementById('photo').src = "../img/photos/Рольшторы/День-Ночь/Luxury/18.jpg";
        }
    }


}


function juventus() {
    var j = document.getElementById("number-of-juventus").options.selectedIndex;
    var juventus = document.getElementById("number-of-juventus").options[j].value;

    if (juventus == 02) {
        if (document.getElementById('mini').checked) {
            document.getElementById('photoMini').src = "../img/photos/Калькулятор/Juventus/02.png";
        }
        if (document.getElementById('uni').checked) {
            document.getElementById('photo').src = "../img/photos/Рольшторы/День-Ночь/Juventus/02.jpg";
        }
    }

    if (juventus == 03) {
        if (document.getElementById('mini').checked) {
            document.getElementById('photoMini').src = "../img/photos/Калькулятор/Juventus/03.png";
        }
        if (document.getElementById('uni').checked) {
            document.getElementById('photo').src = "../img/photos/Рольшторы/День-Ночь/Juventus/03.jpg";
        }
    } 

    if (juventus == 07) {
        if (document.getElementById('mini').checked) {
            document.getElementById('photoMini').src = "../img/photos/Калькулятор/Juventus/07.png";
        }
        if (document.getElementById('uni').checked) {
            document.getElementById('photo').src = "../img/photos/Рольшторы/День-Ночь/Juventus/07.jpg";
        }
    }   

    if (juventus == 10) {
        if (document.getElementById('mini').checked) {
            document.getElementById('photoMini').src = "../img/photos/Калькулятор/Juventus/10.png";
        }
        if (document.getElementById('uni').checked) {
            document.getElementById('photo').src = "../img/photos/Рольшторы/День-Ночь/Juventus/10.jpg";
        }
    }

    if (juventus == 'j11') {
        if (document.getElementById('mini').checked) {
            document.getElementById('photoMini').src = "../img/photos/Калькулятор/Juventus/11.png";
        }
        if (document.getElementById('uni').checked) {
            document.getElementById('photo').src = "../img/photos/Рольшторы/День-Ночь/Juventus/11.jpg";
        }
    }

}

function marbella() {
    var s = document.getElementById("number-of-marbella").options.selectedIndex;
    var select = document.getElementById("number-of-marbella").options[s].value;

    if (select == 601) {
        if (document.getElementById('mini').checked) {
            document.getElementById('photoMini').src = "../img/photos/Калькулятор/Marbella/601.png";
        }
        if (document.getElementById('uni').checked) {
            document.getElementById('photo').src = "../img/photos/Рольшторы/День-Ночь/Marbella/601.jpg";
        }
    }

    if (select == 602) {
        if (document.getElementById('mini').checked) {
            document.getElementById('photoMini').src = "../img/photos/Калькулятор/Marbella/602.png";
        }
        if (document.getElementById('uni').checked) {
            document.getElementById('photo').src = "../img/photos/Рольшторы/День-Ночь/Marbella/602.jpg";
        }
    } 

    if (select == 603) {
        if (document.getElementById('mini').checked) {
            document.getElementById('photoMini').src = "../img/photos/Калькулятор/Marbella/603.png";
        }
        if (document.getElementById('uni').checked) {
            document.getElementById('photo').src = "../img/photos/Рольшторы/День-Ночь/Marbella/603.jpg";
        }
    }   

    if (select == 604) {
        if (document.getElementById('mini').checked) {
            document.getElementById('photoMini').src = "../img/photos/Калькулятор/Marbella/604.png";
        }
        if (document.getElementById('uni').checked) {
            document.getElementById('photo').src = "../img/photos/Рольшторы/День-Ночь/Marbella/604.jpg";
        }
    }

    if (select == 605) {
        if (document.getElementById('mini').checked) {
            document.getElementById('photoMini').src = "../img/photos/Калькулятор/Marbella/605.png";
        }
        if (document.getElementById('uni').checked) {
            document.getElementById('photo').src = "../img/photos/Рольшторы/День-Ночь/Marbella/605.jpg";
        }
    }

    if (select == 606) {
        if (document.getElementById('mini').checked) {
            document.getElementById('photoMini').src = "../img/photos/Калькулятор/Marbella/606.png";
        }
        if (document.getElementById('uni').checked) {
            document.getElementById('photo').src = "../img/photos/Рольшторы/День-Ночь/Marbella/606.jpg";
        }
    }

    if (select == 607) {
        if (document.getElementById('mini').checked) {
            document.getElementById('photoMini').src = "../img/photos/Калькулятор/Marbella/607.png";
        }
        if (document.getElementById('uni').checked) {
            document.getElementById('photo').src = "../img/photos/Рольшторы/День-Ночь/Marbella/607.jpg";
        }
    }

    if (select == 608) {
        if (document.getElementById('mini').checked) {
            document.getElementById('photoMini').src = "../img/photos/Калькулятор/Marbella/608.png";
        }
        if (document.getElementById('uni').checked) {
            document.getElementById('photo').src = "../img/photos/Рольшторы/День-Ночь/Marbella/608.jpg";
        }
    }

    if (select == 609) {
        if (document.getElementById('mini').checked) {
            document.getElementById('photoMini').src = "../img/photos/Калькулятор/Marbella/609.png";
        }
        if (document.getElementById('uni').checked) {
            document.getElementById('photo').src = "../img/photos/Рольшторы/День-Ночь/Marbella/609.jpg";
        }
    }

    if (select == 610) {
        if (document.getElementById('mini').checked) {
            document.getElementById('photoMini').src = "../img/photos/Калькулятор/Marbella/610.png";
        }
        if (document.getElementById('uni').checked) {
            document.getElementById('photo').src = "../img/photos/Рольшторы/День-Ночь/Marbella/610.jpg";
        }
    }

}


function I() {
        var s = document.getElementById("number-of-I(BO)").options.selectedIndex;
        var select = document.getElementById("number-of-I(BO)").options[s].value;

        if (select == 'i2') {
            if (document.getElementById('mini').checked) {
                document.getElementById('photoMini').src = "../img/photos/Калькулятор/I (BO)/2.png";
            }
            if (document.getElementById('uni').checked) {
                document.getElementById('photo').src = "../img/photos/Рольшторы/Блэкаут/I (BO)/2.jpg";
            }
        }

        if (select == 'i3') {
            if (document.getElementById('mini').checked) {
                document.getElementById('photoMini').src = "../img/photos/Калькулятор/I (BO)/3.png";
            }
            if (document.getElementById('uni').checked) {
                document.getElementById('photo').src = "../img/photos/Рольшторы/Блэкаут/I (BO)/3.jpg";
            }
        }

        if (select == 'i4') {
            if (document.getElementById('mini').checked) {
                document.getElementById('photoMini').src = "../img/photos/Калькулятор/I (BO)/4.png";
            }
            if (document.getElementById('uni').checked) {
                document.getElementById('photo').src = "../img/photos/Рольшторы/Блэкаут/I (BO)/4.jpg";
            }
        }

        if (select == 'i5') {
            if (document.getElementById('mini').checked) {
                document.getElementById('photoMini').src = "../img/photos/Калькулятор/I (BO)/5.png";
            }
            if (document.getElementById('uni').checked) {
                document.getElementById('photo').src = "../img/photos/Рольшторы/Блэкаут/I (BO)/5.jpg";
            }
        }

        if (select == 'i6') {
            if (document.getElementById('mini').checked) {
                document.getElementById('photoMini').src = "../img/photos/Калькулятор/I (BO)/6.png";
            }
            if (document.getElementById('uni').checked) {
                document.getElementById('photo').src = "../img/photos/Рольшторы/Блэкаут/I (BO)/6.jpg";
            }
        }

        if (select == 'i7') {
            if (document.getElementById('mini').checked) {
                document.getElementById('photoMini').src = "../img/photos/Калькулятор/I (BO)/7.png";
            }
            if (document.getElementById('uni').checked) {
                document.getElementById('photo').src = "../img/photos/Рольшторы/Блэкаут/I (BO)/7.jpg";
            }
        }

        if (select == 'i8') {
            if (document.getElementById('mini').checked) {
                document.getElementById('photoMini').src = "../img/photos/Калькулятор/I (BO)/8.png";
            }
            if (document.getElementById('uni').checked) {
                document.getElementById('photo').src = "../img/photos/Рольшторы/Блэкаут/I (BO)/8.jpg";
            }
        }

        if (select == 'i9') {
            if (document.getElementById('mini').checked) {
                document.getElementById('photoMini').src = "../img/photos/Калькулятор/I (BO)/9.png";
            }
            if (document.getElementById('uni').checked) {
                document.getElementById('photo').src = "../img/photos/Рольшторы/Блэкаут/I (BO)/9.jpg";
            }
        }

        if (select == 'i10') {
            if (document.getElementById('mini').checked) {
                document.getElementById('photoMini').src = "../img/photos/Калькулятор/I (BO)/10.png";
            }
            if (document.getElementById('uni').checked) {
                document.getElementById('photo').src = "../img/photos/Рольшторы/Блэкаут/I (BO)/10.jpg";
            }
        }

        if (select == '0551') {
            if (document.getElementById('mini').checked) {
                document.getElementById('photoMini').src = "../img/photos/Калькулятор/I (BO)/0551.png";
            }
            if (document.getElementById('uni').checked) {
                document.getElementById('photo').src = "../img/photos/Рольшторы/Блэкаут/I (BO)/0551.jpg";
            }
        }

        if (select == '0576') {
            if (document.getElementById('mini').checked) {
                document.getElementById('photoMini').src = "../img/photos/Калькулятор/I (BO)/0576.png";
            }
            if (document.getElementById('uni').checked) {
                document.getElementById('photo').src = "../img/photos/Рольшторы/Блэкаут/I (BO)/0576.jpg";
            }
        }

        if (select == '0582') {
            if (document.getElementById('mini').checked) {
                document.getElementById('photoMini').src = "../img/photos/Калькулятор/I (BO)/0582.png";
            }
            if (document.getElementById('uni').checked) {
                document.getElementById('photo').src = "../img/photos/Рольшторы/Блэкаут/I (BO)/0582.jpg";
            }
        }

        if (select == '0591') {
            if (document.getElementById('mini').checked) {
                document.getElementById('photoMini').src = "../img/photos/Калькулятор/I (BO)/0591.png";
            }
            if (document.getElementById('uni').checked) {
                document.getElementById('photo').src = "../img/photos/Рольшторы/Блэкаут/I (BO)/0591.jpg";
            }
        }
}

function NOX() {
        var s = document.getElementById("number-of-NOX(BO)").options.selectedIndex;
        var select = document.getElementById("number-of-NOX(BO)").options[s].value;

        if (select == 'nox3') {
            if (document.getElementById('mini').checked) {
                document.getElementById('photoMini').src = "../img/photos/Калькулятор/NOX (BO)/3.png";
            }
            if (document.getElementById('uni').checked) {
                document.getElementById('photo').src = "../img/photos/Рольшторы/Блэкаут/NOX (BO)/3.jpg";
            }
        }

        if (select == 'nox4') {
            if (document.getElementById('mini').checked) {
                document.getElementById('photoMini').src = "../img/photos/Калькулятор/NOX (BO)/4.png";
            }
            if (document.getElementById('uni').checked) {
                document.getElementById('photo').src = "../img/photos/Рольшторы/Блэкаут/NOX (BO)/4.jpg";
            }
        }

        if (select == 'nox5') {
            if (document.getElementById('mini').checked) {
                document.getElementById('photoMini').src = "../img/photos/Калькулятор/NOX (BO)/5.png";
            }
            if (document.getElementById('uni').checked) {
                document.getElementById('photo').src = "../img/photos/Рольшторы/Блэкаут/NOX (BO)/5.jpg";
            }
        }
}

function PB() {
        var s = document.getElementById("number-of-PB(BO)").options.selectedIndex;
        var select = document.getElementById("number-of-PB(BO)").options[s].value;

        if (select == 'pb01') {
            if (document.getElementById('mini').checked) {
                document.getElementById('photoMini').src = "../img/photos/Калькулятор/PB (BO)/01.png";
            }
            if (document.getElementById('uni').checked) {
                document.getElementById('photo').src = "../img/photos/Рольшторы/Блэкаут/PB (BO)/01.jpg";
            }
        }

        if (select == 'pb02') {
            if (document.getElementById('mini').checked) {
                document.getElementById('photoMini').src = "../img/photos/Калькулятор/PB (BO)/02.png";
            }
            if (document.getElementById('uni').checked) {
                document.getElementById('photo').src = "../img/photos/Рольшторы/Блэкаут/PB (BO)/02.jpg";
            }
        }
}

function SF() {
        var s = document.getElementById("number-of-SF(BO)").options.selectedIndex;
        var select = document.getElementById("number-of-SF(BO)").options[s].value;

        if (select == 'sf01') {
            if (document.getElementById('mini').checked) {
                document.getElementById('photoMini').src = "../img/photos/Калькулятор/SF (BO)/01.png";
            }
            if (document.getElementById('uni').checked) {
                document.getElementById('photo').src = "../img/photos/Рольшторы/Блэкаут/SF (BO)/01.jpg";
            }
        }

        if (select == 'sf02') {
            if (document.getElementById('mini').checked) {
                document.getElementById('photoMini').src = "../img/photos/Калькулятор/SF (BO)/02.png";
            }
            if (document.getElementById('uni').checked) {
                document.getElementById('photo').src = "../img/photos/Рольшторы/Блэкаут/SF (BO)/02.jpg";
            }
        }

        if (select == 'sf03') {
            if (document.getElementById('mini').checked) {
                document.getElementById('photoMini').src = "../img/photos/Калькулятор/SF (BO)/03.png";
            }
            if (document.getElementById('uni').checked) {
                document.getElementById('photo').src = "../img/photos/Рольшторы/Блэкаут/SF (BO)/03.jpg";
            }
        }

        if (select == 'sf04') {
            if (document.getElementById('mini').checked) {
                document.getElementById('photoMini').src = "../img/photos/Калькулятор/SF (BO)/04.png";
            }
            if (document.getElementById('uni').checked) {
                document.getElementById('photo').src = "../img/photos/Рольшторы/Блэкаут/SF (BO)/04.jpg";
            }
        }
}

function STR() {
        var s = document.getElementById("number-of-STR(BO)").options.selectedIndex;
        var select = document.getElementById("number-of-STR(BO)").options[s].value;

        if (select == 'str1') {
            if (document.getElementById('mini').checked) {
                document.getElementById('photoMini').src = "../img/photos/Калькулятор/STR (BO)/1.png";
            }
            if (document.getElementById('uni').checked) {
                document.getElementById('photo').src = "../img/photos/Рольшторы/Блэкаут/STR (BO)/1.jpg";
            }
        }

        if (select == 'str2') {
            if (document.getElementById('mini').checked) {
                document.getElementById('photoMini').src = "../img/photos/Калькулятор/STR (BO)/2.png";
            }
            if (document.getElementById('uni').checked) {
                document.getElementById('photo').src = "../img/photos/Рольшторы/Блэкаут/STR (BO)/2.jpg";
            }
        }

        if (select == 'str3') {
            if (document.getElementById('mini').checked) {
                document.getElementById('photoMini').src = "../img/photos/Калькулятор/STR (BO)/3.png";
            }
            if (document.getElementById('uni').checked) {
                document.getElementById('photo').src = "../img/photos/Рольшторы/Блэкаут/STR (BO)/3.jpg";
            }
        }

        if (select == 'str4') {
            if (document.getElementById('mini').checked) {
                document.getElementById('photoMini').src = "../img/photos/Калькулятор/STR (BO)/4.png";
            }
            if (document.getElementById('uni').checked) {
                document.getElementById('photo').src = "../img/photos/Рольшторы/Блэкаут/STR (BO)/4.jpg";
            }
        }

        if (select == 'str5') {
            if (document.getElementById('mini').checked) {
                document.getElementById('photoMini').src = "../img/photos/Калькулятор/STR (BO)/5.png";
            }
            if (document.getElementById('uni').checked) {
                document.getElementById('photo').src = "../img/photos/Рольшторы/Блэкаут/STR (BO)/5.jpg";
            }
        }
}




function openSystem() {
    if (document.getElementById('mini').checked) {
        document.getElementById('photo-mini').style.display = '';
        document.getElementById('photo-uni').style.display = 'none';
    }
    
    if (document.getElementById('uni').checked) {
        document.getElementById('photo-uni').style.display = '';
        document.getElementById('photo-mini').style.display = 'none';
    }

}


function openAdditional() {
    if (document.getElementById('White').checked) {
        document.getElementById('color').src = "../img/photos/Калькулятор/белый.png";
    }

    if (document.getElementById('Brown').checked) {
        document.getElementById('color').src = "../img/photos/Калькулятор/коричневая.png";
    }

    if (document.getElementById('Tree').checked) {
        document.getElementById('color').src = "../img/photos/Калькулятор/ламинация.png";
    }

}









