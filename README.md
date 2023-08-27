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

