---
title: "Building customer identity and access management at Cloudentity"
date: 2023-07-14T05:00:00Z
categories: 
  - Architecture
  - Security
draft: false
---

At Cloudentity, I built customer identity and access management (CIAM) products for Fortune 500 clients. The systems handled authentication, authorization, and user management at scale using Scala and React.

#### The Challenge

CIAM systems must:
- Scale to millions of users
- Support multiple authentication methods
- Provide fine-grained authorization
- Comply with security standards
- Integrate with existing systems

#### Architecture

We built:
- **Authentication Service**: Handle logins, SSO, MFA
- **Authorization Engine**: Policy-based access control
- **User Management**: CRUD operations for users
- **Session Management**: Token generation and validation
- **Admin Console**: React-based management UI

#### Authentication Service (Scala)

```scala
import akka.http.scaladsl.server.Directives._
import akka.http.scaladsl.model.StatusCodes

class AuthenticationService {
  def authenticate(credentials: Credentials): Future[AuthResult] = {
    credentials match {
      case UsernamePassword(username, password) =>
        authenticatePassword(username, password)
      case Token(token) =>
        validateToken(token)
      case SAMLAssertion(assertion) =>
        validateSAMLAssertion(assertion)
    }
  }
  
  private def authenticatePassword(
    username: String,
    password: String
  ): Future[AuthResult] = {
    for {
      user <- userRepository.findByUsername(username)
      isValid <- passwordService.verify(password, user.passwordHash)
    } yield {
      if (isValid) {
        val token = tokenService.generate(user)
        AuthResult.Success(token, user)
      } else {
        AuthResult.Failure("Invalid credentials")
      }
    }
  }
}
```

#### Authorization Engine

```scala
case class Policy(
  subject: String,
  resource: String,
  action: String,
  conditions: List[Condition]
)

class AuthorizationEngine {
  def authorize(
    user: User,
    resource: String,
    action: String
  ): Future[Boolean] = {
    val policies = policyRepository.findBySubject(user.id)
    
    policies.foldLeft(Future.successful(false)) { (acc, policy) =>
      acc.flatMap { authorized =>
        if (authorized) Future.successful(true)
        else evaluatePolicy(policy, user, resource, action)
      }
    }
  }
  
  private def evaluatePolicy(
    policy: Policy,
    user: User,
    resource: String,
    action: String
  ): Future[Boolean] = {
    val matchesResource = policy.resource == resource || 
                         matchesPattern(policy.resource, resource)
    val matchesAction = policy.action == action || 
                       policy.action == "*"
    val conditionsMet = policy.conditions.forall(_.evaluate(user))
    
    Future.successful(matchesResource && matchesAction && conditionsMet)
  }
}
```

#### React Admin Console

```typescript
function UserManagement() {
  const [users, setUsers] = useState<User[]>([]);
  
  useEffect(() => {
    fetchUsers().then(setUsers);
  }, []);
  
  const createUser = async (userData: CreateUserData) => {
    const user = await api.post('/users', userData);
    setUsers(prev => [...prev, user]);
  };
  
  const updateUser = async (userId: string, updates: UserUpdates) => {
    const user = await api.put(`/users/${userId}`, updates);
    setUsers(prev => prev.map(u => u.id === userId ? user : u));
  };
  
  return (
    <div>
      <UserList users={users} />
      <CreateUserForm onSubmit={createUser} />
    </div>
  );
}
```

#### Security Considerations

- Encrypt sensitive data
- Use secure token storage
- Implement rate limiting
- Log all authentication attempts
- Regular security audits

#### Results

- Scalable to millions of users
- Support for multiple auth methods
- Fine-grained authorization
- Compliance with standards
- Successful Fortune 500 deployments

> "CIAM systems are critical infrastructure."

#### Lessons Learned

1. Security must be built in from the start
2. Scalability requires careful design
3. Policy-based authorization is powerful
4. Good UX is essential for adoption
5. Compliance is non-negotiable

