# Backend-Hello-Relax

Asignatura: Ingenieria de Software
Profesora: Cordero Lopez Martha Rosa
Grupo: 3CM11
Equipo: Hello Relax

Diseño del backend validaciones
# Validaciones de la Aplicación Móvil en Flutter

Este repositorio contiene una aplicación móvil desarrollada en Flutter. 

## Validación 1: Autenticación de Usuarios

La aplicación cuenta con un sistema de autenticación de usuarios que permite a los usuarios registrarse, iniciar sesión y cerrar sesión de forma segura. 

## Validación 2: Validación de Formularios

Se han aplicado validaciones en los formularios de la aplicación para garantizar que los datos ingresados por los usuarios sean correctos.

## Validación 3: Seguridad en la Interacción con la API

La aplicación se conecta a una API externa para obtener y enviar datos. 

## Validación 4: Control de Acceso y Permisos

La aplicación cuenta con un sistema de control de acceso que gestiona los roles y permisos de los usuarios. 


## Licencia

Este proyecto se encuentra bajo la licencia [MIT](LICENSE), lo que significa que puedes utilizar el código fuente y modificarlo de acuerdo con tus necesidades.

Option Explicit

Public ValorAnterior As Variant

Private Sub Worksheet_SelectionChange(ByVal Target As Range)

If Target.Column <= 5 And Target.Row <= 4 Then

    ValorAnterior = Target.Value
    'MsgBox ValorAnterior

End If

End Sub

Private Sub Worksheet_Change(ByVal Target As Range)

Dim HojaLog As Worksheet
Dim RangoLog As Range
Dim NuevaFila As Integer

If Target.Column <= 5 And Target.Row <= 4 Then

    Set HojaLog = ThisWorkbook.Sheets("Log")
    Set RangoLog = HojaLog.Range("A1").CurrentRegion
    NuevaFila = RangoLog.Rows.Count + 1

    With HojaLog
        .Cells(NuevaFila, 1).Value = Date
        .Cells(NuevaFila, 2).Value = Time
        .Cells(NuevaFila, 3).Value = Target.Address
        .Cells(NuevaFila, 4).Value = Application.UserName
        .Cells(NuevaFila, 5).Value = ValorAnterior
        .Cells(NuevaFila, 6).Value = Target.Value
    End With

End If

End Sub


Planificación
1.	¿Qué problema resolverá la aplicación?
2.	¿Quién utilizará esta aplicación?
3.	¿Qué finalidades y objetivos cumplirá para los usuarios?
4.	¿Cuál es el problema empresarial que estoy tratando de resolver?
5.	¿Cuál es la tarea?
6.	¿Quién está haciendo el trabajo, cuándo y dónde?
Después de identificar el "quién", considere:
1.	¿Qué dispositivo se usa? ¿Dónde está la ubicación principal del trabajo? 
2.	¿Está en laoficina? ¿Sitio del cliente? ¿Fábrica? 
3.	¿Qué otros sistemas se usan regularmente? 
4.	¿Qué ganaría esta persona al usar la aplicación o cooperar para trabajar con este nuevo proceso?
5.	¿Con qué frecuencia están haciendo el trabajo?
Entonces:
1.	¿Quién hace esto?
2.	¿Dónde se realiza el trabajo?
3.	¿Cuándo se realiza el trabajo?
4.	¿En línea o sin conexión? 
5.	¿Dispositivos? Teléfono, tableta, computadora portátil o escritorio
Pasos y datos:
1.	¿Qué actividades se realizan en este paso? ¿Qué datos, si hay alguno, se le presentaron a esta persona al comenzar con estas actividades? ¿De dónde vinieron estos datos? 
Pregúntese:
•	¿Provenían estos datos de un paso anterior?
•	¿Provenían estos datos de un sistema existente? ¿El usuario necesita iniciar sesión para acceder a los datos?
•	¿Los datos se extraen de un sistema externo, como datos de mercado o del clima?
Privacidad de los datos
2.	¿A qué datos existentes necesitan acceso?
3.	¿Necesitan acceso a datos a los que otros usuarios no deberían tener acceso?
4.	¿Pueden hacer tareas que otros usuarios no deberían poder hacer?
Consideraciones de actualización de datos
•	¿Con qué frecuencia cambian los datos entrantes? ¿Con qué frecuencia se debe actualizar? ¿Estos datos provienen de un dispositivo o un sistema en tiempo real, o estos datos cambian con poca frecuencia? ¿Con qué frecuencia debería actualizarse la aplicación con nuevos datos?
¿Hay un formulario existente?
1.	Además, piense en el formularia críticamente:
2.	¿Deberían presentarse los elementos de datos en un orden diferente que esté más en línea con la forma en que los captura?
3.	¿Se puede dividir el formulario en formularios separados y más pequeños que permitan que partes del proceso sucedan en paralelo, en lugar de una cada vez?
¿Qué tipo de datos son?
¿Alguien usa estos datos más adelante en el proceso?
¿Alguien más puede beneficiarse de estos datos fuera de este proceso?
¿Los datos determinan el resultado de cualquier decisión?
1.	Al final de esta actividad en el proceso, ¿se toma una decisión? ¿Hay alguna manera de que la solución pueda tomar la decisión automáticamente en función de los datos?
2.	¿Se comunica esta decisión a alguien? ¿Cómo se comunica?
3.	¿Esta decisión determina si se ejecutará el siguiente paso del proceso? ¿Cómo se comunica eso?
4.	¿Tiene alguna lógica "si/entonces"? 
¿La decisión requiere aprobaciones?
¿Son necesarias las escalaciones?
Algunas preguntas clave que hacer:
•	¿Se pueden eliminar las actividades restantes del proceso para aumentar la eficiencia o la calidad, o reducir los costes?
•	Si la actividad de corte es importante para el negocio en general, ¿se puede manejar en un proceso de negocio separado?
•	¿Se puede mejorar un paso para lograr su objetivo de una mejor manera?
•	¿Se puede reorganizar el orden de los pasos?
•	¿Se pueden combinar los pasos?
•	¿Se pueden ejecutar los pasos de este proceso al mismo tiempo?
•	¿Puede reducirse la cantidad de personas que se necesitan para ejecutar el proceso?
•	¿Puede cambiarse la forma en que se notifica a la siguiente persona del proceso para que responda más rápidamente?
•	¿Hay aspectos del proceso que se puedan automatizar más?
Identificar las tareas a realizar en la aplicación





