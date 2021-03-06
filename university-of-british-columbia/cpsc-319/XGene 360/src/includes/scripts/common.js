function openCourseDetail( strCourseId )
{
  xgene360_cu.setLocation( './viewcourse.php?courseid=' + strCourseId );
}

function openProblemDetail( strProblemId )
{
  xgene360_cu.setLocation( './viewproblem.php?problemid=' + strProblemId );
}

function openProfessorDetail( strProfessorId )
{
  xgene360_cu.setLocation( './viewprofessor.php?professorid=' + strProfessorId );
}

function openTADetail( strTAId )
{
  xgene360_cu.setLocation( './viewta.php?taid=' + strTAId );
}

function openStudentDetail( strStudentId )
{
  xgene360_cu.setLocation( './viewstudent.php?studentid=' + strStudentId );
}

function hightlightSelectedRow( objElement, bHightlight )
{
  if ( bHightlight )
  {
    objElement.className = 'highlight';
    xgene360_cu.useHandCursor( objElement );
  }
  
  else
  {
    objElement.className = '';
    xgene360_cu.useRegularCursor( objElement );
  }
}
