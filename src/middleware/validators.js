<body>
    <main>
        <form action="" class="formulario" id="formulario">


            <div class="formulario_grupo" id="grupo_usuario">
                <label for="usuario" class="formulario_label">Usuario</label>
                <div class="formulario_grupo_input">
                    <input type="text" class="formulario_input" name="usuario" id="usuario" placeholder="john123"></input>
                    <i class="formulario_validacion_estado fa-regular fa-circle-xmark"></i>

                </div>
                <p class="formulario_input_error">El nombre no puede contener números</p>
            </div>


            <div class="formulario_grupo" id="grupo_nombre">
                <label for="nombre" class="formulario_label">Nombre</label>
                <div class="formulario_grupo_input">
                    <input type="text" class="formulario_input" name="nombre" id="nombre" placeholder="john"></input>
                    <i class="formulario_validacion_estado fa-regular fa-circle-xmark"></i>

                </div>
                <p class="formulario_input_error">El usuario tiene que ser de 4 a 16 dígitos y solo puede contener números y letras</p>
            </div>


            <div class="formulario_grupo" id="grupo_password">
                <label for="password" class="formulario_label">Contraseña</label>
                <div class="formulario_grupo_input">
                    <input type="password" class="formulario_input" name="password" id="password"></input>
                    <i class="formulario_validacion_estado fa-regular fa-circle-xmark"></i>

                </div>
                <p class="formulario_input_error">La contraseña tiene que ser de 4 a 12 dígitos</p>
            </div>


            <div class="formulario_grupo" id="grupo_password2">
                <label for="password2" class="formulario_label">Repetir Contraseña</label>
                <div class="formulario_grupo_input">
                    <input type="password" class="formulario_input" name="password2" id="password2"></input>
                    <i class="formulario_validacion_estado fa-regular fa-circle-xmark"></i>

                </div>
                <p class="formulario_input_error">Ambas contraseñas deben ser iguales</p>
            </div>


            <div class="formulario_grupo" id="grupo_correo">
                <label for="correo" class="formulario_label">Correo Electrónico</label>
                <div class="formulario_grupo_input">
                    <input type="email" class="formulario_input" name="correo" id="correo" placeholder="1156484964"></input>
                    <i class="formulario_validacion_estado fa-regular fa-circle-xmark"></i>

                </div>
                <p class="formulario_input_error">El teléfono solo puede contener números y el máximo son 14 dígitos</p>
            </div>


            <div class="formulario_grupo" id="grupo_telefono">
                <label for="telefono" class="formulario_label">Teléfono</label>
                <div class="formulario_grupo_input">
                    <input type="text" class="formulario_input" name="telefono" id="telefono" placeholder="telefono@telefono.com"></input>
                    <i class="formulario_validacion_estado fa-regular fa-circle-xmark"></i>

                </div>
                <p class="formulario_input_error">El correo solo puede contener letras, números, puntos, guiones y guíon bajo</p>
            </div>

            <div class="formulario_grupo" id="grupo_terminos">
                <label class="formulario_label">
                    <input class="formulario_checkbox" type="checkbox" name="terminos" id="terminos"></input>
                    Acepto los Términos y condiciones
                </label>

            </div>



            <div class="formulario_mensaje" id="formulario_mensaje">
                <p><i class="fa-solid fa-triangle-exclamation"></i> <b>Error:</b>Por favor rellenar el formulario correctamente. </p>

            </div>


            <div class="formulario_grupo formulario_grupo_boton_enviar">
                <button type="submit" class="formulario_boton">Enviar</button>
                <p class="formulario_mensaje_exito" id="formulario_mensaje_exito">Formulario enviado exitosamente!</p>
            </div>

        </form>
    </main>

<script src="https://kit.fontawesome.com/2c36e9b7b1.js" crossorigin="anonymous"></script>
</body>

