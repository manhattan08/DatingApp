namespace DatingApp.Errors;

public class ApiException
{
    public ApiException(string message, int statusCode, string details)
    {
        Message = message;
        StatusCode = statusCode;
        Details = details;
    }

    public int StatusCode { get; set; }
    public string Message { get; set; }
    public string Details { get; set; }
}