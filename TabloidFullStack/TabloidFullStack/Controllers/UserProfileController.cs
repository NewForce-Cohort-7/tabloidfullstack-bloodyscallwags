using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Http;
using TabloidFullStack.Models;
using TabloidFullStack.Repositories;

// For more information on enabling Web API for empty projects, visit https://go.microsoft.com/fwlink/?LinkID=397860

namespace TabloidFullStack.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class UserProfileController : ControllerBase
    { 
     //private readonly IUserProfileRepository _userProfileRepository;
        private readonly IUserRepository _userRepository;
    public UserProfileController(IUserRepository userRepository)
    {
        //_userProfileRepository = userProfileRepository;
        _userRepository = userRepository;
    }

    [HttpGet]
    public IActionResult Get()
        {
            return Ok(_userRepository.GetAll());
        }

    [HttpGet("{id}")]
    public IActionResult Get(int id)
        {
            var profile = _userRepository.GetById(id);
            if (profile == null)
            {
                return NotFound();
            }
            return Ok(profile);
        }



    [HttpGet("GetByEmail")]
    public IActionResult GetByEmail(string email)
    {
        var user = _userRepository.GetByEmail(email);

        if (email == null || user == null)
        {
            return NotFound();
        }
        return Ok(user);
    }

    [HttpPost]
    public IActionResult Post(UserProfile userProfile)
    {
        userProfile.CreateDateTime = DateTime.Now;
        userProfile.UserTypeId = UserType.AUTHOR_ID;
        _userRepository.Add(userProfile);
        return CreatedAtAction(
            "GetByEmail",
            new { email = userProfile.Email },
            userProfile);
    }

        // PUT api/<UserProfileController>/5
        [HttpPut("{id}")]
        public IActionResult UpdateActive(int id, UserProfile user)
        {
            _userRepository.UpdateActive(user);
            return Ok(user);
        }

        //[HttpGet("GetByActiveStatus/{isActive}")]
        //public IActionResult GetByActiveStatus(int isActive)
        //{
        //    var profile = _userRepository.GetByActiveStatus(isActive);
        //    if (profile == null)
        //    {
        //        return NotFound();
        //    }
        //    return Ok(profile);
        //}
    }
}
