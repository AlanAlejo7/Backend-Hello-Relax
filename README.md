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

Sub CompareWordsBA()
    Dim cellB As Range
    Dim cellD As Range
    Dim differentWords As String
    Dim wordsB() As String
    Dim wordsD() As String
    Dim word As Variant
    
    ' Define el rango de celdas en el que deseas comparar el contenido
    Dim inputRange As Range
    Set inputRange = Range("B2:B10") ' Cambia este rango según tus necesidades
    
    For Each cellB In inputRange
        differentWords = "" ' Vacía la variable en cada iteración
        
        ' Define la celda en la columna D correspondiente a la celda en la columna B
        Set cellD = cellB.Offset(0, 2) ' Columna D está 2 columnas a la derecha de B
        
        ' Divide el contenido de las celdas en palabras
        wordsB = Split(cellB.Value, " ")
        wordsD = Split(cellD.Value, " ")
        
        ' Compara las palabras y encuentra las diferentes
        For Each word In wordsD
            If Not IsInArray(word, wordsB) Then
                differentWords = differentWords & word & " "
            End If
        Next word
        
        ' Muestra las palabras diferentes en la columna F
        cellB.Offset(0, 4).Value = Trim(differentWords) ' Columna F está 4 columnas a la derecha de B
    Next cellB
End Sub

Function IsInArray(ByVal stringToCheck As String, arr As Variant) As Boolean
    Dim element As Variant
    On Error Resume Next
    IsInArray = Not IsError(Application.Match(stringToCheck, arr, 0))
    On Error GoTo 0
End Function


-------------------------------------------------------------------------------------------------------------

Sub CompareWordsAB()
    Dim cellB As Range
    Dim cellD As Range
    Dim differentWords As String
    Dim wordsB() As String
    Dim wordsD() As String
    Dim word As Variant
    
    ' Define el rango de celdas en el que deseas comparar el contenido
    Dim inputRange As Range
    Set inputRange = Range("B2:B10") ' Cambia este rango según tus necesidades
    
    For Each cellB In inputRange
        differentWords = "" ' Vacía la variable en cada iteración
        
        ' Define la celda en la columna D correspondiente a la celda en la columna B
        Set cellD = cellB.Offset(0, 2) ' Columna D está 2 columnas a la derecha de B
        
        ' Divide el contenido de las celdas en palabras
        wordsB = Split(cellB.Value, " ")
        wordsD = Split(cellD.Value, " ")
        
        ' Compara las palabras y encuentra las diferentes
        For Each word In wordsB
            If Not IsInArray(word, wordsD) Then
                differentWords = differentWords & word & " "
            End If
        Next word
        
        ' Muestra las palabras diferentes en la celda correspondiente en la columna E
        cellB.Offset(0, 3).Value = Trim(differentWords) ' Columna E está 3 columnas a la derecha de B
    Next cellB
End Sub

Function IsInArray(ByVal stringToCheck As String, arr As Variant) As Boolean
    Dim element As Variant
    On Error Resume Next
    IsInArray = Not IsError(Application.Match(stringToCheck, arr, 0))
    On Error GoTo 0
End Function

-----------------------------------------------------------------------------------------------------------
Sub CompararCoincidencias()

    Dim ws As Worksheet
    Dim colC As Range, colB As Range
    Dim cellC As Range, cellF As Range
    Dim resultCell As Range
    Dim matchingIDs As String
    
    ' Establecer la hoja de trabajo y los rangos de columnas
    Set ws = ThisWorkbook.Sheets("b") ' Cambia "Nombre de la Hoja" por el nombre correcto
    Set colC = ws.Range("C2:C11")
    Set colB = ws.Range("B2:B11")
    Set cellF = ws.Range("F2")
    
    ' Celda donde se escribirán los IDs coincidentes
    Set resultCell = ws.Range("G2")
    
    ' Reiniciar la cadena de IDs coincidentes
    matchingIDs = ""
    
    ' Loop a través de las celdas en el rango de la columna C
    For Each cellC In colC
        ' Comparar el contenido de la celda F2 con la celda actual en la columna C
        If InStr(1, cellC.Value, cellF.Value, vbTextCompare) > 0 Then
            ' Si hay coincidencia, agregar el ID correspondiente a la cadena
            If matchingIDs <> "" Then
                matchingIDs = matchingIDs & ", "
            End If
            matchingIDs = matchingIDs & colB.Cells(cellC.Row - colC.Row + 1, 1).Value
        End If
    Next cellC
    
    ' Escribir los IDs coincidentes en la celda G2
    resultCell.Value = matchingIDs
    
    ' Liberar memoria de objetos
    Set ws = Nothing
    Set colC = Nothing
    Set colB = Nothing
    Set cellF = Nothing
    Set resultCell = Nothing

End Sub


-----------------------------------------------------------------------------------------------------------------------------

Sub CompararCoincidencias()

    Dim ws As Worksheet
    Dim colC As Range, colB As Range
    Dim cellC As Range, cellF As Range
    Dim resultRange As Range
    Dim matchingIDs As String
    
    ' Establecer la hoja de trabajo y los rangos de columnas
    Set ws = ThisWorkbook.Sheets("b") ' Cambia "Nombre de la Hoja" por el nombre correcto
    Set colC = ws.Range("C2:C11")
    Set colB = ws.Range("B2:B11")
    
    ' Rango de celdas F2:F5
    Set resultRange = ws.Range("F2:F5")
    
    ' Loop a través de las celdas en el rango de celdas F2 hasta F5
    For Each cellF In resultRange
        ' Reiniciar la cadena de IDs coincidentes para esta iteración
        matchingIDs = ""
        
        ' Loop a través de las celdas en el rango de la columna C
        For Each cellC In colC
            ' Comparar el contenido de la celda F con la celda actual en la columna C
            If InStr(1, cellC.Value, cellF.Value, vbTextCompare) > 0 Then
                ' Si hay coincidencia, agregar el ID correspondiente a la cadena
                If matchingIDs <> "" Then
                    matchingIDs = matchingIDs & ", "
                End If
                matchingIDs = matchingIDs & colB.Cells(cellC.Row - colC.Row + 1, 1).Value
            End If
        Next cellC
        
        ' Escribir los IDs coincidentes en el rango de celdas G2 hasta G5
        resultRange.Offset(0, 1).Value = matchingIDs
        
        ' Mover el rango de resultados al siguiente conjunto de celdas en G
        Set resultRange = resultRange.Offset(1, 0).Resize(1, 1)
    Next cellF
    
    ' Liberar memoria de objetos
    Set ws = Nothing
    Set colC = Nothing
    Set colB = Nothing
    Set resultRange = Nothing

End Sub




Sub CopyHospitalNames()
    Dim ws As Worksheet
    Dim idRange As Range
    Dim hospitalRange As Range
    Dim resultRange As Range
    Dim idCell As Range
    Dim hospitalCell As Range
    Dim resultCell As Range
    
    ' Establece la hoja de trabajo
    Set ws = ThisWorkbook.Sheets("NombreDeTuHoja")
    
    ' Define el rango de IDs y hospitales
    Set idRange = ws.Range("F2:F603")
    Set hospitalRange = ws.Range("G2:G603")
    
    ' Define el rango donde se copiarán los nombres
    Set resultRange = ws.Range("P2:P603")
    
    ' Inicializa el contador de fila para los resultados
    Dim resultRow As Long
    resultRow = 2
    
    ' Recorre los IDs y verifica los hospitales correspondientes
    For Each idCell In idRange
        Set hospitalCell = hospitalRange.Cells(idCell.Row - idRange.Cells(1).Row + 1)
        Set resultCell = resultRange.Cells(resultRow)
        
        If idCell.Value = "PENDIENTE" Or idCell.Value = "NO ENCONTRADO" Then
            resultCell.Value = hospitalCell.Value
            resultRow = resultRow + 1
        Else
            resultCell.ClearContents
        End If
    Next idCell
End Sub


