def statusCode = prev.getResponseCode() as Integer
if (statusCode != 200) {
    AssertionResult.setFailure(true)
    AssertionResult.setFailureMessage("Status kode tidak relevan, seharusnya 200 tapi dapet: ${statusCode}")
}
